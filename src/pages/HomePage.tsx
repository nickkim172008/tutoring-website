import type { Page } from "../types";

type Props = {
  navigate: (page: Page) => void;
};

export function HomePage({ navigate }: Props) {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">Ontario curriculum aligned</p>
          <h1>Math tutoring that turns confusion into confidence.</h1>
          <p className="hero-lede">
            One-on-one online math tutoring for Grades 6-12 across Ontario, built around
            clear explanations, steady practice, and a plan students can actually follow.
          </p>
          <div className="hero-pills" aria-label="Tutoring highlights">
            <span>Grades 6-12</span>
            <span>In person in Etobicoke</span>
            <span>Online across Ontario</span>
          </div>
          <div className="button-row">
            <button className="primary-button" onClick={() => navigate("contact")} type="button">
              Book Free Consultation
            </button>
            <button className="secondary-button" onClick={() => navigate("services")} type="button">
              View Services
            </button>
          </div>
          <p className="microcopy">30-minute intro session. No cost, no commitment.</p>
        </div>
        <div className="hero-media">
          <img src="/images/james.jpg" alt="Student working through math tutoring material" />
          <div className="hero-stat">
            <strong>250+ hours</strong>
            <span>of tutoring experience</span>
          </div>
          <div className="hero-note">
            <span>100%</span>
            <p>Advanced Functions and Calculus</p>
          </div>
        </div>
      </section>

      <section className="process-band">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>A simple rhythm that keeps progress visible.</h2>
          </div>
          <ol className="process-grid">
            <li>
              <span>01</span>
              <h3>Free Consultation</h3>
              <p>We talk through the student&apos;s goals, course demands, and confidence gaps.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Personalized Plan</h3>
              <p>Sessions are shaped around current units, upcoming tests, and core foundations.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Weekly Sessions</h3>
              <p>Students get calm, focused practice with room to ask every question.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Families notice the confidence first.</h2>
        </div>
        <div className="testimonial-grid">
          <blockquote>
            Nicholas helped my son in Grade 9 and daughter in Grade 11 go from struggling
            in math to actually enjoying it. Their grades and confidence have soared.
            <footer>Joanna, Parent</footer>
          </blockquote>
          <blockquote>
            I was failing Grade 12 Advanced Functions until Nicholas helped me build
            techniques and study schedules. I ended up with an 80% and a passion for math.
            <footer>Matthew, Student</footer>
          </blockquote>
        </div>
      </section>

      <section className="cta-section container">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Start with a free consultation.</h2>
          <p>Bring the current unit, the next test date, or just the feeling that math is not clicking yet.</p>
        </div>
        <button className="primary-button" onClick={() => navigate("contact")} type="button">
          Book Free Consultation
        </button>
      </section>
    </>
  );
}
