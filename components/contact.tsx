"use client";

import { useState, useRef } from "react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useSectionInView } from "@/hooks/useSectionInView";

import { sendEmail } from "@/actions/sendEmailAction";

import SectionHeading from "./section-heading";
import SubmitButton from "@/components/submit-button";
import TurnstileButton from "@/components/turnstile-button";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement | null>(null);

  const [isVerified, setIsverified] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success(
      "Your message has been sent! I will get back to you as soon as possible."
    );

    if (formRef.current) {
      formRef.current.reset();
    }
    setIsverified(false);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/70">
        Contact me directly at{" "}
        <a className="underline" href="mailto:iliascodes@gmail.com">
          iliascodes@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        ref={formRef}
        className="flex flex-col mt-10 dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-hidden dark:valid:bg-white focus:ring-2 focus:ring-indigo-600/50 outline-hidden"
          placeholder="Your e-mail"
          required
          maxLength={320}
        />
        <textarea
          name="message"
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-hidden dark:valid:bg-white focus:ring-2 focus:ring-indigo-600/50 outline-hidden"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <TurnstileButton
          setIsverified={setIsverified}
          isVerified={isVerified}
        />
        <SubmitButton isTurnstileVerified={isVerified} />
      </form>
    </motion.section>
  );
}
