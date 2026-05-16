export type CertificationItem = {
  name: string;
  issuer: string;
  year?: string;
  logoSrc: string;
  logoAlt: string;
  note?: string;
};

export const certifications: CertificationItem[] = [
  {
    name: "Meta Backend Developer",
    issuer: "Meta",
    year: "",
    logoSrc: "/images/Meta-Logo.png",
    logoAlt: "Meta logo",
    note: "Backend developer specialization",
  },
  {
    name: "Project Management Specialization",
    issuer: "Google",
    year: "",
    logoSrc: "/images/Google.png",
    logoAlt: "Google logo",
    note: "Google Career Certificates",
  },
  {
    name: "Leading Teams: Developing as a Leader",
    issuer: "University of Illinois Urbana–Champaign",
    year: "",
    logoSrc: "/images/University_of_Illinois_at_Urbana-Champaign_Wordmark.svg.png",
    logoAlt: "University of Illinois wordmark",
  },
  {
    name: "Introduction to Negotiation: A Strategic Playbook for Becoming a Principled and Persuasive Negotiator",
    issuer: "Yale University",
    year: "",
    logoSrc: "/images/Yale University.png",
    logoAlt: "Yale crest",
  },
];


