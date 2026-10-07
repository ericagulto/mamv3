export const site = {
  name: "Makeup Academy Manila",
  shortName: "MAM",
  tagline: "Face-to-face makeup & hairstyling training in Quezon City",
  description:
    "Hands-on, face-to-face makeup and hairstyling programs in Quezon City. Eleven courses from 1-day foundations to a 10-day prosthetics intensive. Train with working artists. OJT at film, TV, and theatre. Inquire now.",
  url: "https://makeupacademymanila.com",
  founder: "Faye Young",
  email: "admissions@makeupacademymanila.com",
  phone: "0917 873 9894",
  phoneHref: "+639178739894",
  address: {
    street: "19 Francisca Tirona Benitez Street, Tierra Verde Homes 2",
    barangay: "Barangay Pasong Tamo",
    city: "Quezon City",
    region: "Metro Manila",
    postalCode: "1107",
    country: "Philippines",
  },
  addressFull:
    "19 Francisca Tirona Benitez Street, Tierra Verde Homes 2, Barangay Pasong Tamo, Quezon City, Metro Manila, Philippines 1107",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Student Stories", href: "/student-stories" },
  { label: "Industry", href: "/industry" },
] as const;
