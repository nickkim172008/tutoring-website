import { faqs } from "../data";

export function AboutPage() {
  return (
    <>
      <section className="container page-hero about-layout">
        <div>
          <p className="eyebrow">About Nicholas</p>
          <h1>A high-achieving math student who explains things like a real person.</h1>
          <p>
            Hi, I&apos;m Nicholas. I&apos;m a Grade 12 AP student with a passion for helping
            younger students succeed in math.
          </p>
          <p>
            I completed Ontario&apos;s most advanced math courses early, earning 100% in
            both Advanced Functions and Calculus, plus a 5/5 on the AP Calculus AB exam.
          </p>
          <p>
            With 250+ hours of experience tutoring 20+ students, I focus on making math
            clear and approachable while building student confidence step by step.
          </p>
        </div>
        <div className="about-collage" aria-label="Nicholas outside academics">
          <img src="/images/golf.jpg" alt="Nicholas golfing" />
          <img src="/images/guitar.jpg" alt="Nicholas playing guitar" />
          <img src="/images/hockey.jpg" alt="Nicholas playing hockey" />
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions from families.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
