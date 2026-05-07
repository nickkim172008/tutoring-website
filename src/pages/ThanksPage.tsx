import type { Page } from "../types";

type Props = {
  navigate: (page: Page) => void;
};

export function ThanksPage({ navigate }: Props) {
  return (
    <section className="container thanks-page">
      <p className="eyebrow">Thank you</p>
      <h1>Your message is ready to send.</h1>
      <p>
        Your email app should open with the consultation request filled in. Send it there,
        and Nicholas will reply as soon as possible.
      </p>
      <button className="primary-button" onClick={() => navigate("home")} type="button">
        Back to Home
      </button>
    </section>
  );
}
