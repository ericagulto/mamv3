export interface Testimonial {
  quote: string;
  name: string;
  source: "Google Review" | "Facebook Review";
}

/** Real student reviews from the original site — deduplicated, verbatim. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I will forever cherish my experience here. They do not just teach about makeups, you will also learn other things as a person. Ms Faye, Ms Cecille, and their whole team was very approachable and friendly. You can freely feel you belong and they treat you like a family.",
    name: "Sherrylou Ramos",
    source: "Google Review",
  },
  {
    quote:
      "The best school I had in Manila. Miss Faye Young and amazing crew treats you like family. Because of them I am now part of a film production.",
    name: "Cheyenne Adamson",
    source: "Google Review",
  },
  {
    quote:
      "I took up basic fundamentals of makeup application and advanced pro. Best mentors to teach you about the theory and practice of makeup. 10/10 will enroll again!",
    name: "Maxene Lati",
    source: "Google Review",
  },
  {
    quote:
      "This is a total package if you really want to make makeup a business.",
    name: "CLSHES Shes",
    source: "Google Review",
  },
  {
    quote:
      "This is the place where you can only feel good vibes and happiness. Teachers are very welcoming and warm to their students regardless of their status. I am one of the luckiest who was able to experience firsthand how Ms. Faye Young handles her students.",
    name: "Cecille Artistry",
    source: "Google Review",
  },
  {
    quote:
      "Lot of learnings not only on the technical aspect. Boost ones confidence as well.",
    name: "Cris Makeup Artistry",
    source: "Facebook Review",
  },
  {
    quote:
      "They are very friendly and easy to be with. Ma'am Faye Young is awesome.",
    name: "April Amurao",
    source: "Google Review",
  },
  {
    quote:
      "The best makeup school with OJTs. They specialize in bridal, airbrush, special effects and prosthetic makeup.",
    name: "Annette Magno",
    source: "Google Review",
  },
  {
    quote: "Best makeup school.",
    name: "Mary Joy Guadamor",
    source: "Google Review",
  },
  {
    quote:
      "The BEST school for makeup enthusiasts and aspiring pro makeup artists!",
    name: "Ness Vido",
    source: "Google Review",
  },
];
