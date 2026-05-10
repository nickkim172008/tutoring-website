import type { Page } from "../types";

type Props = {
  navigate: (page: Page) => void;
};

export function ThanksPage({ navigate }: Props) {
  return (
    <section className="container thanks-page">
      <p className="eyebrow">Thank you</p>
      <h1>Your message has been sent.</h1>
      <p>
        Thanks for reaching out. Nicholas will reply as soon as possible.
      </p>
      <button className="primary-button" onClick={() => navigate("home")} type="button">
        Back to Home
      </button>
    </section>
  );
}
