"use server";

import React from "react";

import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

import { ValidateString, getErrorMessage } from "@/lib/helpers";
import {
  CONTACT_FORM_CONFIG,
  contactFormMessageTooShortError,
} from "@/lib/contactFormConfig";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const email = FormData.get("email");
  const message = FormData.get("message");

  if (!ValidateString(email, CONTACT_FORM_CONFIG.emailMaxLength)) {
    return { error: "Invalid email" };
  }

  if (email.trim().length === 0) {
    return { error: "Invalid email" };
  }

  if (!ValidateString(message, CONTACT_FORM_CONFIG.messageMaxLength)) {
    return { error: "Invalid message" };
  }

  if (message.trim().length < CONTACT_FORM_CONFIG.messageMinLength) {
    return {
      error: contactFormMessageTooShortError(CONTACT_FORM_CONFIG.messageMinLength),
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      replyTo: email as string,
      subject: "Message from iliasdev.com contact form",
      react: React.createElement(ContactFormEmail, {
        email: email as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
