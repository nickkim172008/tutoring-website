export type Page = "home" | "about" | "services" | "contact" | "thanks";

export type Service = {
  title: string;
  grades: string;
  description: string;
  image: string;
  alt: string;
};

export type Faq = {
  question: string;
  answer: string;
};
