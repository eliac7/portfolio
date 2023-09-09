"use client";

import { verifyCaptcha } from "@/actions/turnstileAction";
import { useRef } from "react";

import { Turnstile } from "@marsidev/react-turnstile";

import React from "react";

export default function TurnstileButton({
  setIsverified,
}: {
  setIsverified: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const turnstileRef = useRef<any>(null);

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  function handleCaptchaExpiration() {
    setIsverified(false);
  }
  return (
    <div className="flex items-center justify-left my-4">
      <Turnstile
        ref={turnstileRef}
        siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!}
        onExpire={handleCaptchaExpiration}
        onSuccess={handleCaptchaSubmission}
        className="borderBlack"
      />
    </div>
  );
}
