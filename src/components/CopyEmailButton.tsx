"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" onClick={copy} className="btn-ghost" aria-live="polite">
      {copied ? (
        <>
          <CheckIcon className="size-4" /> Copied!
        </>
      ) : (
        "Copy email"
      )}
    </button>
  );
}
