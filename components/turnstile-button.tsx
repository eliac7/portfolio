"use client";

import { useEffect } from "react";
import { verifyCaptcha } from "@/actions/turnstileAction";
import { useRef } from "react";
import { useTheme } from "next-themes";

import { Turnstile } from "@marsidev/react-turnstile";

import React from "react";

export default function TurnstileButton({
  setIsverified,
  isVerified,
}: {
  setIsverified: React.Dispatch<React.SetStateAction<boolean>>;
  isVerified: boolean;
}) {
  const turnstileRef = useRef<any>(null);
  const { resolvedTheme } = useTheme();

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  function handleCaptchaExpiration() {
    setIsverified(false);
  }

  useEffect(() => {
    if (!isVerified) {
      turnstileRef.current?.reset();
    }
  }, [isVerified]);

  return (
    <div className="flex items-center justify-center my-4 w-full">
      <Turnstile
        ref={turnstileRef}
        siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!}
        onExpire={handleCaptchaExpiration}
        onSuccess={handleCaptchaSubmission}
        className="borderBlack"
        options={{
          size: "flexible",
          theme: (resolvedTheme || "light") as "light" | "dark" | "auto",
        }}
      />
    </div>
  );
}
