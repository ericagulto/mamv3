export interface CourseModule {
  title: string;
  body: string;
}

export interface Course {
  slug: string;
  name: string;
  /** Short name for tight layouts (schedule table, paths) */
  shortName: string;
  discipline: string;
  level: string;
  levelGroup: "beginner" | "intermediate" | "professional";
  days: number;
  tuition: number;
  intro: string;
  audience: string;
  image: string;
  imageAlt: string;
  modules: CourseModule[];
  howItWorks: string;
  related: string[];
}

/** Shared across every course — printed once on the course page */
export const standardInclusions = [
  "All training materials provided",
  "Certificate of completion",
  "Portfolio images of your work",
  "OJT at film, TV, stage, and theatre performances",
  "10% discount on succeeding courses",
  "Makeup Academy Manila welcome gift",
] as const;

export const courses: Course[] = [
  {
    slug: "personal-makeup-class",
    name: "Personal Makeup Class",
    shortName: "Personal Makeup",
    discipline: "Makeup",
    level: "Beginner",
    levelGroup: "beginner",
    days: 1,
    tuition: 10000,
    intro:
      "A one-day personal makeup class. Master foundation matching, contouring, eye looks, and everyday glam with hands-on coaching, all materials provided.",
    audience:
      "Anyone who wants to look polished and confident every day: students, young professionals, and beginners curious about professional makeup. No experience needed — just bring yourself.",
    image: "/images/personal.jpg",
    imageAlt: "Model with a clean, no-makeup makeup look applied in class",
    modules: [
      { title: "Skin Type and Skin Tone", body: "Identify your skin type and undertone, and the products and shades that flatter you most." },
      { title: "Face Shape and Eye Shape", body: "Understand your proportions and learn which techniques suit your features best." },
      { title: "Highlight and Low Light", body: "Use light and shadow to enhance your features naturally." },
      { title: "Color Theory, Warm and Cool Tones", body: "Build a working sense of color so every look comes together and harmonizes." },
      { title: "Prep and Sanitation", body: "Cleanse, tone, and moisturize the way professionals do — and keep your kit and skin safe." },
      { title: "Correctors, Concealers, and Foundation", body: "Correct darkness, redness, and blemishes, then build a flawless, long-lasting base." },
      { title: "Brows, Eyeshadow, Lashes, and Liners", body: "Shape and fill brows; blend everyday and evening eye looks; apply liner styles and lashes that define the eyes." },
      { title: "Contours, Blush, and Lips", body: "Sculpt with corrective and enhancement contours, place fresh natural color, and finish with healthy, polished lips." },
      { title: "Finishing Touches", body: "Simple hair care and styling so hair complements your makeup — plus a list of personal tools worth buying." },
    ],
    howItWorks:
      "Classes stay small so you get one-on-one attention. Your instructor demonstrates each technique on a live face, then guides your hands as you practice on yourself, correcting form until each look feels natural.",
    related: ["masterclass-for-eye-makeup-techniques", "corporate-makeup-signature-look-training", "basic-fundamentals-of-makeup-technical-applications"],
  },
  {
    slug: "basic-fundamentals-of-makeup-technical-applications",
    name: "Basic Fundamentals of Makeup Technical Applications",
    shortName: "Basic Fundamentals",
    discipline: "Makeup",
    level: "Beginner to Professional",
    levelGroup: "beginner",
    days: 5,
    tuition: 35000,
    intro:
      "A 5-day makeup foundations program covering makeup science, face chart mapping, professional tools, day and night looks, and a graduation pictorial for your portfolio.",
    audience:
      "Beginners who want to start a professional makeup career the right way, plus self-taught artists ready to close the gaps in their technique and product knowledge. No experience required.",
    image: "/images/class-hands-on.jpg",
    imageAlt: "Students practicing makeup application on models in the studio",
    modules: [
      { title: "The Makeup Basics", body: "Facial structures, skin, tones, types, and shapes." },
      { title: "The Makeup Science", body: "Theory and discussion, face chart mapping, tools and the makeup station, the lighting system, a master list of a basic kit, and the cosmetics industry itself." },
      { title: "Master's Demo", body: "Watch a working professional build complete looks from start to finish." },
      { title: "Hands-on Day and Night Looks", body: "Apply daytime and evening makeup with guided correction." },
      { title: "Assessment, Pictorial, Certification", body: "Prove your skills in a structured assessment, photograph your work for your portfolio, and graduate with a certificate of completion." },
    ],
    howItWorks:
      "Each day balances theory with practice: face-chart work in the morning, live demos, then supervised application on models. The program closes with an assessment, a pictorial, and certification.",
    related: ["advanced-professional-makeup-class", "bridal-masterclass", "airbrush-master-class-pro-class"],
  },
  {
    slug: "advanced-professional-makeup-class",
    name: "Advanced Professional Makeup Class",
    shortName: "Advanced Professional",
    discipline: "Makeup",
    level: "Professional",
    levelGroup: "professional",
    days: 5,
    tuition: 45000,
    intro:
      "Level up to professional artistry in 5 days: HD and photography makeup, high fashion, film and TV techniques, bridal, and the business of being a working artist, with real OJT.",
    audience:
      "Working makeup artists and graduates of Basic Fundamentals who want film, fashion, and bridal industry skills, plus self-taught artists with a solid foundation ready to go professional.",
    image: "/images/artist-portrait.jpg",
    imageAlt: "A professional makeup artist at work in the studio",
    modules: [
      { title: "Fundamentals Review", body: "A fast, thorough review of the core skills everything else builds on." },
      { title: "The Makeup Science", body: "Deepen product knowledge and the science behind lasting finishes." },
      { title: "Advanced Tools and Techniques", body: "Work with professional-grade tools, equipment, and advanced methods." },
      { title: "Introduction to Airbrush", body: "A first taste of airbrush; the full program is covered in the Airbrush Master Class." },
      { title: "HD, Photography, High Fashion, Avant-garde", body: "Looks that read beautifully on camera and on the runway." },
      { title: "Film, TV, Theatrical, SFX Background", body: "Production skills for sets and stages, plus the prosthetics grounding every set artist needs." },
      { title: "Bridal Makeup and Industry Foreground", body: "Bridal looks with the professional polish clients pay for." },
      { title: "Business Compass and Real OJT", body: "Pricing, positioning, and running your artistry as a business — with hands-on exposure on real industry work." },
      { title: "Portfolio Building", body: "A curated portfolio that wins clients and gigs." },
    ],
    howItWorks:
      "Five days move from fundamentals review to camera, stage, and bridal work, closing with the business of artistry and portfolio building. OJT hours happen on real bookings, not simulations.",
    related: ["basic-fundamentals-of-makeup-technical-applications", "bridal-masterclass", "airbrush-master-class-pro-class"],
  },
  {
    slug: "bridal-masterclass",
    name: "Bridal Masterclass",
    shortName: "Bridal Masterclass",
    discipline: "Bridal",
    level: "Professional",
    levelGroup: "professional",
    days: 5,
    tuition: 40000,
    intro:
      "A 5-day bridal makeup masterclass: long-wear bridal techniques, entourage application, client communication, and how to build a profitable bridal package.",
    audience:
      "Makeup artists who want to win bridal clients, from consultation and trial sessions to managing wedding-day timelines and working with photographers and coordinators.",
    image: "/images/course-bridal.jpg",
    imageAlt: "Bridal makeup applied on a Filipina model",
    modules: [
      { title: "Bridal Fundamentals", body: "Understanding bridal styles, skincare for brides, and color composition for bridal looks." },
      { title: "Bridal Techniques", body: "Foundation matching and application, concealing for flawless skin, contouring and highlighting, eyebrow shaping and defining." },
      { title: "The Entourage", body: "Application for mature women, young women, and male clients." },
      { title: "Trials and Client Communication", body: "Bridal trial sessions, consultations, creating a bridal package, and network building in the wedding industry." },
      { title: "Final Project", body: "Create a complete bridal makeup look showcasing everything you learned." },
    ],
    howItWorks:
      "You work on real bridal faces across the program — brides-to-be and entourage members of every age. Learn the trial process, package building, and how to run wedding-day timelines with confidence.",
    related: ["basic-hairstyling-course", "advanced-professional-makeup-class", "airbrush-master-class-pro-class"],
  },
  {
    slug: "airbrush-master-class-pro-class",
    name: "Airbrush Master Class (Pro Class)",
    shortName: "Airbrush Master Class",
    discipline: "Airbrush",
    level: "Intermediate to Professional",
    levelGroup: "intermediate",
    days: 3,
    tuition: 35000,
    intro:
      "Professional airbrush makeup training — seamless, long-wearing, camera-proof finishes using industry airbrush systems, in 3 hands-on days.",
    audience:
      "Working artists who want the airbrush advantage for bridal, editorial, and HD work — plus graduates of our fundamentals program ready to specialize.",
    image: "/images/course-airbrush.jpg",
    imageAlt: "Artist applying airbrush foundation to a model's cheek at a studio station",
    modules: [
      { title: "Skin, Tone, and Face Reading on Air", body: "Foundations that transfer to airbrush work, matching tone and undertone, and adapting placement to every face and eye shape." },
      { title: "Color Theory Aerograph", body: "Color mixing and application through the airbrush, with tone harmony for warm and cool work." },
      { title: "Prep and Prime on Air", body: "Cleanse, tone, moisturize, and primer — plus manual correction before you spray for a flawless canvas." },
      { title: "System Care and Cleaning", body: "Keep your airbrush system performing at its best." },
      { title: "Brows, Contours, and Eyeshadow on Air Strokes", body: "Precise brows, sculpted contours, and blended, camera-proof eye looks built with controlled air strokes." },
    ],
    howItWorks:
      "Three days of supervised practice on professional airbrush systems: each technique is demonstrated, then applied by you with live correction until the finish is seamless and camera-proof.",
    related: ["basic-fundamentals-of-makeup-technical-applications", "advanced-professional-makeup-class", "bridal-masterclass"],
  },
  {
    slug: "masterclass-for-eye-makeup-techniques",
    name: "Masterclass for Eye Makeup Techniques",
    shortName: "Eye Makeup Masterclass",
    discipline: "Eye Makeup",
    level: "Intermediate",
    levelGroup: "intermediate",
    days: 1,
    tuition: 8000,
    intro:
      "A 1-day eye makeup masterclass: identify every eye shape, master powder and cream shadows, cut crease, smoky looks, and airbrush blending.",
    audience:
      "Artists who want to own the most technical area of makeup: precise eye-shape analysis, corrective techniques, and looks for everyday, photoshoots, and film.",
    image: "/images/course-eye.jpg",
    imageAlt: "Artist blending eyeshadow on a model at a studio station",
    modules: [
      { title: "Eyeshadows and Tools", body: "Powder versus cream shadows, cream base paints, and an overview of airbrush tools." },
      { title: "Eye Shapes and Corrective Technique", body: "Identify every eye shape, tailor techniques to each, and correct common issues." },
      { title: "Design for Occasion and Location", body: "Daytime versus evening, special occasions, photoshoots, and film — adapting makeup to the setting." },
      { title: "Brands and Product Selection", body: "Choosing shadows for different skin types and eye colors, high-end versus drugstore." },
      { title: "Advanced Looks", body: "Dimension and depth, cut crease, smoky eye, and airbrush blending — with troubleshooting for common challenges." },
      { title: "Portfolio Looks and Certification", body: "Build custom designs and a portfolio of looks, close with a practical evaluation and certificate award." },
    ],
    howItWorks:
      "A focused day of demonstration and supervised practice on different eye shapes and designs, ending with a practical evaluation, theory exam, and portfolio feedback.",
    related: ["personal-makeup-class", "basic-fundamentals-of-makeup-technical-applications", "airbrush-master-class-pro-class"],
  },
  {
    slug: "corporate-makeup-signature-look-training",
    name: "Corporate Makeup Signature Look Training",
    shortName: "Corporate Signature Look",
    discipline: "Corporate",
    level: "All Levels",
    levelGroup: "beginner",
    days: 1,
    tuition: 7500,
    intro:
      "A 1-day corporate makeup program: a polished, professional signature look for work, events, and camera — with skincare prep, day-to-night transitions, and career tips.",
    audience:
      "Working professionals who want a consistent, camera-ready presence, plus artists adding corporate and executive clients to their roster.",
    image: "/images/course-corporate.jpg",
    imageAlt: "A professional applying corporate makeup at a vanity while an instructor guides her",
    modules: [
      { title: "Corporate Makeup and Skincare Prep", body: "Styles suited to corporate environments and the skincare prep that builds a flawless base." },
      { title: "Your Signature Look", body: "A polished, natural everyday look — emphasizing features while staying professional." },
      { title: "Event and Camera Makeup", body: "Enhancing features for photography and video, with long-lasting event makeup." },
      { title: "Day to Night Transition", body: "Turn a daytime look into evening elegance with depth and drama." },
      { title: "Application Techniques and Hygiene", body: "Foundation, contour, highlight, and corporate-appropriate eyes — plus professional hygiene standards and etiquette." },
      { title: "Business and Marketing Tips", body: "Building a corporate makeup career, marketing yourself, and managing client consultations." },
    ],
    howItWorks:
      "Guided hands-on sessions with one-on-one feedback throughout the day, closing with a recap of key learnings and certificate distribution.",
    related: ["personal-makeup-class", "masterclass-for-eye-makeup-techniques", "basic-fundamentals-of-makeup-technical-applications"],
  },
  {
    slug: "special-effects-sfx-makeup-masterclass",
    name: "Special Effects (SFX) Makeup Masterclass",
    shortName: "SFX Masterclass",
    discipline: "Special Effects",
    level: "Professional",
    levelGroup: "professional",
    days: 7,
    tuition: 40000,
    intro:
      "A 7-day special effects makeup masterclass covering bruises, burns, wounds, wax and scar work, blood staging, old-age effects, and prosthetic application, with a set-ready portfolio.",
    audience:
      "Production-focused artists who want credible, set-ready effects work in their portfolio for film, TV, theatre, and events.",
    image: "/images/course-sfx.jpg",
    imageAlt: "Artist staging a bruise effect on a model's forearm with pigment and a stipple sponge",
    modules: [
      { title: "Composition and Design", body: "Plan effects from reference to final design." },
      { title: "Bruises and Burns", body: "Create realistic bruising at every stage of healing and first-, second-, and third-degree burns done right." },
      { title: "Skin Details", body: "Moles and freckles in alcohol for transferable durability; wet and dry blisters at every stage." },
      { title: "Wax, Scars, and Wounds", body: "Sculpt scars and tissue damage with professional wax; build set-ready cuts, scratches, and scabs." },
      { title: "Blood Works and Staging", body: "Fresh, drying, and staged blood for realistic scenes." },
      { title: "Teeth, Eye Effects, and Facial Hair", body: "Dental and ocular effects that finish the character, plus mustache and beard making that reads on camera." },
      { title: "Old Age for HD and Stage", body: "Aging makeup that holds up at close-up and stage distances." },
      { title: "Supplies and the Industry Review", body: "Know exactly which SFX tools and brands to invest in, and how effects work fits real productions." },
    ],
    howItWorks:
      "Seven days in the studio, one effect family per day, each practiced to set standard. The program closes with a professional portfolio pictorial of your finished effects.",
    related: ["prosthetics-makeup-training-making-and-applying-ptx", "advanced-professional-makeup-class", "airbrush-master-class-pro-class"],
  },
  {
    slug: "prosthetics-makeup-training-making-and-applying-ptx",
    name: "Prosthetics Makeup Training (Making and Applying PTX)",
    shortName: "Prosthetics (PTX)",
    discipline: "Prosthetics",
    level: "Professional",
    levelGroup: "professional",
    days: 10,
    tuition: 50000,
    intro:
      "A 10-day prosthetics makeup course: live casting, molding and sculpting, silicone, latex, and gelatin work, application and removal — build film-grade pieces from scratch.",
    audience:
      "Artists ready for the deepest craft in the industry: prosthetic fabrication and application for film, TV, and high-end events.",
    image: "/images/course-prosthetics.jpg",
    imageAlt: "Artist painting a full-face silicone character prosthetic on a seated model",
    modules: [
      { title: "Introduction and Safety", body: "The craft, the materials, how the industry uses them, contents and hazards, and setting up a professional kit and workstation." },
      { title: "Design and Live Casts", body: "Design pieces from character reference to final form, then take accurate casts of a live subject." },
      { title: "Molding and Sculpting", body: "Sculpt and mold your designs with precision." },
      { title: "Latex, Silicone, Gelatine, and Foam", body: "Work across the four core prosthetic materials." },
      { title: "Adhesives and Paints", body: "Apply, blend, and paint pieces to match skin." },
      { title: "Teeth and Hair Makeup", body: "Complete characters with dental and hair effects." },
      { title: "Removal, Storage, and Aftercare", body: "Safe, clean removal that protects the talent, and keeping pieces and kits in professional condition." },
    ],
    howItWorks:
      "Ten days from design to finished character: you cast, sculpt, mold, run, apply, paint, and remove your own pieces under working-artist supervision, building a film-grade portfolio as you go.",
    related: ["special-effects-sfx-makeup-masterclass", "advanced-professional-makeup-class", "bridal-masterclass"],
  },
  {
    slug: "basic-hairstyling-course",
    name: "Basic Hairstyling Course",
    shortName: "Basic Hairstyling",
    discipline: "Hair",
    level: "Intermediate",
    levelGroup: "intermediate",
    days: 3,
    tuition: 15000,
    intro:
      "A 3-day hairstyling course: prep, set, curl, and finish bridal and event hair on every texture, with the right products and professional Dyson tools included.",
    audience:
      "Makeup artists adding hairstyling to their services — and beginners starting out in bridal and event beauty.",
    image: "/images/course-hair-basic.jpg",
    imageAlt: "Stylist setting a curl through long hair with a professional wand",
    modules: [
      { title: "Prepping the Bride and Entourage", body: "Hair drying, setting products, setting and curling, alpha and beta bonds — and five designs." },
      { title: "Hair Textures", body: "Coarse, straightened, natural curls, damaged, healthy, colored, thin, long, and short." },
      { title: "Product Application", body: "Mousse, texturizers, clips, gels, and sprays — when and how." },
      { title: "Styling Tools (Dyson)", body: "Blow dryers, curling rods and barrels, flat irons, silicone pads, pins, sectioning clamps, segmenters, velcro, fibers, glitters, and accessories." },
    ],
    howItWorks:
      "Hands-on practice on real hair every day: you prep, set, curl, and finish designs while your instructor corrects technique in real time.",
    related: ["bridal-masterclass", "advanced-salon-hair-techniques", "airbrush-master-class-pro-class"],
  },
  {
    slug: "advanced-salon-hair-techniques",
    name: "Advanced Salon Hair Techniques",
    shortName: "Advanced Salon Hair",
    discipline: "Hair",
    level: "Advanced",
    levelGroup: "intermediate",
    days: 5,
    tuition: 30000,
    intro:
      "A 5-day advanced salon hair course — master cutting systems, color theory, and salon business operations so you can work in professional salons, editorial settings, and your own studio with confidence.",
    audience:
      "Stylists and salon professionals who want cutting, color, and business systems — from classic shapes through fashion color to running the floor.",
    image: "/images/course-hair-salon.jpg",
    imageAlt: "Colorist painting a foil section of hair color in the salon studio",
    modules: [
      { title: "Hair Cutting 101", body: "The core systems every salon artist builds on: the female straight cut, layers that move with the head, short hair that holds its shape, and a real introduction to barbering — with a door opened to avant-garde cutting for editorial and runway work." },
      { title: "Prepping to Color Hair", body: "Hair analysis and color theory that transfer to the chair: how colorants work, timing, lifting and deposit, bleaching, rebonding, fashion colors, treatments, and color removal — plus alpha and beta bonds so you understand why hair lifts the way it does." },
      { title: "Salon Business Systems", body: "Client flow and booking that keeps the schedule full, service menus that make money, product retail, and the daily systems that turn a stylist into a business. The part most courses skip." },
    ],
    howItWorks:
      "Each day runs as a guided workshop: Faye Young demonstrates the technique on a model or mannequin, then you apply it on live hair with direct instructor correction at your station. Days 1–2 build your cutting systems, day 3 is color theory and application, day 4 covers advanced styling and finishing, and day 5 brings it together with salon business systems and your final assessment.",
    related: ["basic-hairstyling-course", "bridal-masterclass", "advanced-professional-makeup-class"],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export const levelPaths = [
  {
    key: "beginner",
    eyebrow: "Level 01 · Foundations",
    name: "Beginner",
    blurb:
      "New to makeup or building your first skill set. Start here to learn correct technique from the start.",
    slugs: ["personal-makeup-class", "basic-fundamentals-of-makeup-technical-applications", "corporate-makeup-signature-look-training"],
  },
  {
    key: "intermediate",
    eyebrow: "Level 02 · Specialization",
    name: "Intermediate",
    blurb:
      "Have the basics down. Ready to specialize in bridal, airbrush, hairstyling, or eye makeup.",
    slugs: ["airbrush-master-class-pro-class", "masterclass-for-eye-makeup-techniques", "basic-hairstyling-course", "advanced-salon-hair-techniques"],
  },
  {
    key: "professional",
    eyebrow: "Level 03 · Career",
    name: "Professional",
    blurb:
      "Pursuing makeup as a career. Advanced technique, SFX, prosthetics, and industry-level training.",
    slugs: ["advanced-professional-makeup-class", "bridal-masterclass", "special-effects-sfx-makeup-masterclass", "prosthetics-makeup-training-making-and-applying-ptx"],
  },
] as const;

export function formatTuition(amount: number): string {
  return `PHP ${amount.toLocaleString("en-PH")}`;
}
