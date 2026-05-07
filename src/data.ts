import type { Faq, Service } from "./types";

export const services: Service[] = [
  {
    title: "Middle School Math",
    grades: "Grades 6-8",
    description:
      "Fractions, decimals, ratios, integers, word problems, and the habits that make future math feel lighter.",
    image: "/images/elementary.png",
    alt: "Middle school math tutoring",
  },
  {
    title: "High School Math",
    grades: "Grades 9-12",
    description:
      "Algebra, functions, trigonometry, Advanced Functions, Calculus and Vectors, and course-specific review.",
    image: "/images/highschool.png",
    alt: "High school math tutoring",
  },
  {
    title: "Homework and Test Prep",
    grades: "Assignments, quizzes, exams",
    description:
      "Day-to-day support, study schedules, problem-solving strategy, and clear communication with families.",
    image: "/images/homework.png",
    alt: "Homework and test preparation",
  },
];

export const faqs: Faq[] = [
  {
    question: "What grade levels do you tutor?",
    answer:
      "I work with students from Grades 6-12 following the Ontario curriculum, from foundational numeracy to senior math and Calculus.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes. Sessions run online using Zoom and an iPad whiteboard so students can see each step clearly and ask questions in real time.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are arranged directly with families. E-transfer is typical, and details can be confirmed during the consultation.",
  },
  {
    question: "Do you provide homework help?",
    answer:
      "Absolutely. I help with daily assignments, EQAO prep, quizzes, exams, and study strategies that reduce stress before deadlines.",
  },
];
