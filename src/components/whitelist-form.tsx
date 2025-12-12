"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type FormState = {
  email: string;
};

const initialFormState: FormState = {
  email: "",
};

export function WhitelistForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setForm({ email: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/whitelist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to save your spot");
      }

      setStatus("success");
      setMessage("You're on the list. We'll send early access details soon.");
      setForm(initialFormState);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't add you right now. Please retry."
      );
    }
  };

  return (
    <div className="glass-panel space-y-8 p-6 sm:p-10">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Join the whitelist before launch
        </h2>
        <p className="text-sm text-white/70">
          We&apos;ll ping
          you the moment vaults open
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-purple-300 focus:outline-none"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@fund.xyz"
            autoComplete="email"
          />
          <button
            type="submit"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Join the waitlist"}
          </button>
        </div>
      </form>

      {message && (
        <p
          className={`text-sm ${
            status === "success" ? "text-emerald-300" : "text-red-300"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

