"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { LuArrowUpRight, LuMail } from "react-icons/lu";

import { sendEmail } from "@/actions/sendEmailAction";
import TurnstileButton from "@/components/turnstile-button";
import SubmitButton from "@/components/submit-button";
import { useSectionInView } from "@/hooks/useSectionInView";
import {
  CONTACT_FORM_CONFIG,
} from "@/lib/contactFormConfig";
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
    return "That email does not look quite right. Try something like you@example.com.";
  }

  return undefined;
};

const validateMessage = (value: string) => {
  const message = value.trim();

  if (!message) return "Tell me a little about the project you'd like to discuss.";
  if (message.length < CONTACT_FORM_CONFIG.messageMinLength) {
    return "Could you add a little more detail? Five characters is the minimum.";
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

    setIsSubmitting(true);
    try {
      const result = await sendEmail(new FormData(event.currentTarget));
      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Your message has been sent! I will get back to you soon.");
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
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-6xl scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-indigo-300/15 blur-3xl dark:bg-indigo-400/10" />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
              Let&apos;s work together
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 max-w-md leading-7 text-slate-600 dark:text-slate-300">
              Looking for a full-stack engineer? Tell me what you&apos;re building and let&apos;s figure out how to make it reliable, useful and ready to grow.
            </p>
            <a
              href={`mailto:${portfolioContent.profile.email}`}
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-slate-300 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-indigo-400 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              <LuMail aria-hidden="true" />
              {portfolioContent.profile.email}
              <LuArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <form
            ref={formRef}
            className="rounded-3xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-slate-950/35 sm:p-7"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Your email
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
                aria-describedby={errors.email ? "contact-email-error" : undefined}
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
                <p id="contact-email-error" className="mt-2 text-sm text-rose-600 dark:text-rose-300" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                How can I help?
              </label>
              <textarea
                ref={messageRef}
                id="contact-message"
                name="message"
                className={`min-h-40 w-full rounded-xl border bg-white p-4 text-slate-900 outline-none transition focus:ring-4 dark:bg-white/10 dark:text-white ${
                  errors.message
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/10 dark:border-rose-300/70 dark:focus:border-rose-300"
                    : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/10 dark:border-white/15"
                }`}
                placeholder="Tell me a little about your project..."
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
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {touched.message && errors.message && (
                <p id="contact-message-error" className="mt-2 text-sm text-rose-600 dark:text-rose-300" role="alert">
                  {errors.message}
                </p>
              )}
              <p className="mt-2 text-right text-xs text-slate-500 dark:text-slate-400" aria-live="polite">
                {messageValue.length} / {CONTACT_FORM_CONFIG.messageMaxLength}
              </p>
            </div>
            <TurnstileButton setIsverified={setIsverified} isVerified={isVerified} />
            <SubmitButton isTurnstileVerified={isVerified} isSubmitting={isSubmitting} />
          </form>
        </div>
      </div>
    </motion.section>
  );
}
