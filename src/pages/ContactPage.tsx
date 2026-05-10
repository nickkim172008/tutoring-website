import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import type { Page } from "../types";

type Props = {
  navigate: (page: Page) => void;
};

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  message: "",
};

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export function ContactPage({ navigate }: Props) {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [error, setError] = useState("");

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setError("Please enter your name and a message.");
      return;
    }

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setError("Email is not configured yet. Please use the direct email link below.");
      console.error("Missing EmailJS environment variables.");
      return;
    }

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          name: trimmedName,
          email: trimmedEmail || "(none provided)",
          from_name: trimmedName,
          from_email: trimmedEmail || "(none provided)",
          reply_to: trimmedEmail,
          message: trimmedMessage,
        },
        emailJsConfig.publicKey
      );
      setForm(initialForm);
      navigate("thanks");
    } catch (error) {
      setError("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <section className="container contact-layout page-hero">
      <div>
        <p className="eyebrow">Contact</p>
        <h1>Book a free consultation.</h1>
        <p>
          Send a quick note with the grade, course, and weak points.
          Nicholas will get back to you shortly.
        </p>

        <form className="contact-form" onSubmit={submit}>
          {error && <div className="form-error">{error}</div>}
          <label htmlFor="name">
            Your Name
            <input
              id="name"
              name="name"
              required
              type="text"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
            />
          </label>
          <label htmlFor="email">
            Your Email
            <input
              id="email"
              name="email"
              placeholder="you@example.com"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
            />
          </label>
          <button className="primary-button" type="submit">Send Message</button>
        </form>
      </div>

      <aside className="contact-card">
        <img src="/images/headshot.png" alt="Nicholas Kim" />
        <div>
          <h2>Availability</h2>
          <p>Evenings and weekends.</p>
        </div>
        <div>
          <h2>Direct Contact</h2>
          <a href="mailto:nicholaskim.tutoring@gmail.com">nicholaskim.tutoring@gmail.com</a>
          <a href="tel:+16476124140">+1 (647) 612-4140</a>
        </div>
      </aside>
    </section>
  );
}
