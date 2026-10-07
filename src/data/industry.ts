export interface Highlight {
  org: string;
  title: string;
  body: string;
}

export const highlights: Highlight[] = [
  {
    org: "Newport Performing Arts Theater",
    title: "Official Makeup Team",
    body: "Official makeup team for professional theatre productions including Bongga Ka, ’Day!: The Annie Batungbakal Musical. Artists handle high-intensity quick changes and character design for professional casts.",
  },
  {
    org: "7th Global Trends",
    title: "Notable Academy for Make Up Artistry",
    body: "Awarded Notable Academy for Make Up Artistry, recognized for educational quality in the Philippine beauty industry.",
  },
  {
    org: "Philippine Bridal Fairs",
    title: "Leading Participation",
    body: "Leading participation in the nation's premier bridal exhibitions, bringing the Makeup Academy Manila Bride aesthetic to thousands of prospective clients.",
  },
  {
    org: "Remarkable Woman",
    title: "Dedication to Artistry and Education",
    body: "Founder Faye Young recognized for dedication to artistry and education in the professional beauty sector.",
  },
  {
    org: "IROG Year 7",
    title: "Official Judge, Bridal Hair and Makeup Competition",
    body: "Faye Young served as judge for the Bridal Hair and Makeup Competition, evaluating professional-level work from artists across the industry.",
  },
];

export const founderCredentials = [
  "President, Philippine Makeup Artist Association (PMUAA), 10+ years",
  "Faculty, Australian College of Hair Design and Beauty Manila, since 2015",
  "Official makeup team, Newport Performing Arts Theater: Bongga Ka, Day! The Annie Batungbakal Musical",
  "Notable Academy for Make Up Artistry, 7th Global Trends",
  "Official judge, IROG Year 7 Bridal Hair and Makeup Competition",
  "Prosthetics and airbrush studies, Top to Toe Makeup College, Singapore",
  "Advanced training under makeup educator Cecille Rebollos",
] as const;
