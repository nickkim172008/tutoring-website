import { services } from "../data";
import type { Page } from "../types";

type Props = {
  navigate: (page: Page) => void;
};

export function ServicesPage({ navigate }: Props) {
  return (
    <>
      <section className="container page-hero">
        <p className="eyebrow">Tutoring services</p>
        <h1>Personalized math support for Grades 6-12.</h1>
        <p>
          Lessons follow the Ontario curriculum and adapt to the student&apos;s pace, goals,
          current assignments, and confidence level, shaped by 250+ tutoring hours with
          20+ students.
        </p>
      </section>

      <section className="container section">
        <div className="card-grid">
          {services.map((service) => (
            <article className="service-card large" key={service.title}>
              <img src={service.image} alt={service.alt} />
              <div>
                <span>{service.grades}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container info-grid">
        <article>
          <h2>Lesson Format</h2>
          <p>
            Online across Ontario using Zoom and an iPad whiteboard for interactive,
            step-by-step lessons students can follow clearly, backed by experience with
            20+ learners.
          </p>
        </article>
        <article>
          <h2>Rates</h2>
          <p>
            Discussed during the free consultation. Sessions are flexible and pay as you go,
            without long-term contracts.
          </p>
          <button className="primary-button" onClick={() => navigate("contact")} type="button">
            Book Free Consultation
          </button>
        </article>
      </section>
    </>
  );
}
