"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    formData.append("subject", "New Virlix Media Website Inquiry");
    formData.append("from_name", "Virlix Media Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to send your message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#09090B] px-6 py-24"
    >
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Ready to make your
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}brand go viral?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Tell us about your brand and your goals. Let's build something
            people can't stop talking about.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-10">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 text-2xl">
                ✓
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                Thanks for reaching out!
              </h3>

              <p className="mt-4 text-gray-400">
                Your message has been received. We'll get back to you soon.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-cyan-400 transition hover:text-cyan-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Your Name
                  </label>

                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Email Address
                  </label>

                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Company
                </label>

                <input
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Tell us about your project
                </label>

                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="What are you looking to achieve?"
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60"
                />
              </div>

              {error && (
                <p className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}