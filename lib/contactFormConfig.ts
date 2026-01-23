export const CONTACT_FORM_CONFIG = {
  emailMaxLength: 320,
  messageMinLength: 5,
  messageMaxLength: 5000,
} as const;

export const contactFormMessageTooShortError = (minLength: number) =>
  `Message must be at least ${minLength} characters.`;
