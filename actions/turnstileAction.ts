"use server";

import { getErrorMessage } from "@/lib/helpers";

export async function verifyCaptcha(token: string | null) {
  const key = process.env.CLOUDLFARE_SECRET_KEY;
  try {
    const res = await fetch(
      `https://challenges.cloudflare.com/turnstile/v0/siteverify?secret=${key}&response=${token}`,
      {
        method: "POST",
      }
    );
    const data = await res.json();

    return data.success;
  } catch (err) {
    getErrorMessage(err);
  }
}
