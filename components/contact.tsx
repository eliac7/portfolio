"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { LuArrowUpRight, LuMail } from "react-icons/lu";

import { sendEmail } from "@/actions/sendEmailAction";
import TurnstileButton from "@/components/turnstile-button";
import SubmitButton from "@/components/submit-button";
import { useSectionInView } from "@/hooks/useSectionInView";
import { CONTACT_FORM_CONFIG } from "@/lib/contactFormConfig";
import portfolioContent from "@/lib/portfolio-content";

interface FormErrors {
  email?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (value: string) => {
  const email = value.trim();

  if (!email) return "Please add your email so I know where to reply.";
  if (email.length > CONTACT_FORM_CONFIG.emailMaxLength) {
    return `Please use an email under ${CONTACT_FORM_CONFIG.emailMaxLength} characters.`;
  }
  if (!emailPattern.test(email)) {
    return "That email does not look right. Try something like you@example.com.";
  }

  return undefined;
};

const validateMessage = (value: string) => {
  const message = value.trim();

  if (!message) return "Tell me what you are building or where you need help.";
  if (message.length < CONTACT_FORM_CONFIG.messageMinLength) {
    return "Please add a little more detail so I can understand what you need.";
  }

  return undefined;
};

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [isVerified, setIsverified] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [touched, setTouched] = useState({ email: false, message: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const nextErrors: FormErrors = {
      email: validateEmail(emailValue),
      message: validateMessage(messageValue),
    };

    setTouched({ email: true, message: true });
    setErrors(nextErrors);

    return !nextErrors.email && !nextErrors.message;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      requestAnimationFrame(() => {
        if (validateEmail(emailValue)) {
          emailRef.current?.focus();
        } else {
          messageRef.current?.focus();
        }
      });
      return;
    }

    if (!isVerified) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await sendEmail(new FormData(event.currentTarget));
      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Message sent. I will get back to you soon.");
      formRef.current?.reset();
      setEmailValue("");
      setMessageValue("");
      setTouched({ email: false, message: false });
      setErrors({});
      setIsverified(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-6xl scroll-mt-28 border-y border-slate-200 py-12 sm:mb-28 sm:py-16 dark:border-white/10"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Let&apos;s talk about what you&apos;re building.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-slate-600 dark:text-slate-300">
            Hiring a full-stack engineer or building a product? Share a few
            details about the role, the product, or the problem you need to
            solve. I will reply by email.
          </p>
          <a
            href={`mailto:${portfolioContent.profile.email}`}
            className="mt-8 inline-flex w-fit max-w-full items-center gap-2 break-all text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-indigo-600 hover:decoration-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-slate-200 dark:decoration-white/20 dark:hover:text-indigo-300 dark:hover:decoration-indigo-300"
          >
            <LuMail aria-hidden="true" className="shrink-0" />
            <span>{portfolioContent.profile.email}</span>
            <LuArrowUpRight aria-hidden="true" className="shrink-0" />
          </a>
        </div>

        <form
          ref={formRef}
          className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-slate-950/35 sm:p-7"
          onSubmit={handleSubmit}
          aria-busy={isSubmitting}
          noValidate
        >
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Email address
              </label>
              <input
                ref={emailRef}
                id="contact-email"
                type="email"
                name="email"
                value={emailValue}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  setEmailValue(nextValue);
                  if (touched.email) {
                    setErrors((current) => ({
                      ...current,
                      email: validateEmail(nextValue),
                    }));
                  }
                }}
                onBlur={() => {
                  setTouched((current) => ({ ...current, email: true }));
                  setErrors((current) => ({
                    ...current,
                    email: validateEmail(emailValue),
                  }));
                }}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className={`h-12 w-full rounded-xl border bg-white px-4 text-slate-900 outline-none transition focus:ring-4 dark:bg-white/10 dark:text-white ${
                  errors.email
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/10 dark:border-rose-300/70 dark:focus:border-rose-300"
                    : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/10 dark:border-white/15"
                }`}
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={CONTACT_FORM_CONFIG.emailMaxLength}
              />
              {touched.email && errors.email && (
                <p
                  id="contact-email-error"
                  className="mt-2 text-sm text-rose-600 dark:text-rose-300"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                What would you like to discuss?
              </label>
              <textarea
                ref={messageRef}
                id="contact-message"
                name="message"
                className={`min-h-40 w-full resize-y rounded-xl border bg-white p-4 text-slate-900 outline-none transition focus:ring-4 dark:bg-white/10 dark:text-white ${
                  errors.message
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/10 dark:border-rose-300/70 dark:focus:border-rose-300"
                    : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/10 dark:border-white/15"
                }`}
                placeholder="A product, problem, or role you would like to discuss..."
                maxLength={CONTACT_FORM_CONFIG.messageMaxLength}
                value={messageValue}
                onChange={(event) => {
                  const nextValue = event.target.value.slice(
                    0,
                    CONTACT_FORM_CONFIG.messageMaxLength,
                  );
                  setMessageValue(nextValue);
                  if (touched.message) {
                    setErrors((current) => ({
                      ...current,
                      message: validateMessage(nextValue),
                    }));
                  }
                }}
                onBlur={() => {
                  setTouched((current) => ({ ...current, message: true }));
                  setErrors((current) => ({
                    ...current,
                    message: validateMessage(messageValue),
                  }));
                }}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
              />
              {touched.message && errors.message && (
                <p
                  id="contact-message-error"
                  className="mt-2 text-sm text-rose-600 dark:text-rose-300"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
              <p
                className="mt-2 text-right text-xs text-slate-500 dark:text-slate-400"
                aria-live="polite"
              >
                {messageValue.length} / {CONTACT_FORM_CONFIG.messageMaxLength}
              </p>
            </div>
            <TurnstileButton
              setIsverified={setIsverified}
              isVerified={isVerified}
            />
            {!isVerified && (
              <p
                className="-mt-2 mb-4 text-center text-xs text-slate-500 dark:text-slate-400"
                role="status"
                aria-live="polite"
              >
                Complete the security check before sending.
              </p>
            )}
            <SubmitButton
              isTurnstileVerified={isVerified}
              isSubmitting={isSubmitting}
            />
        </form>
      </div>
    </section>
  );
}
