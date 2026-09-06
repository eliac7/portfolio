export const CONTACT_FORM_CONFIG = {
  emailMaxLength: 320,
  messageMinLength: 5,
  messageMaxLength: 5000,
} as const;

export const contactFormMessageTooShortError = () =>
  "Please add a little more detail so I can understand what you need.";
