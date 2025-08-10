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
    logoSrc: "/images/certifications/meta.svg",
    logoAlt: "Meta logo",
    note: "Backend developer specialization",
  },
  {
    name: "Project Management Specialization",
    issuer: "Google",
    year: "",
    logoSrc: "/images/certifications/google.svg",
    logoAlt: "Google logo",
    note: "Google Career Certificates",
  },
  {
    name: "Programming Using Python",
    issuer: "GO TEL",
    year: "",
    logoSrc: "/images/certifications/Go-tel.svg",
    logoAlt: "GO TEL",
    note: "Placeholder until authoritative logo is confirmed",
  },
  {
    name: "Sales & CRM Overview",
    issuer: "Salesforce",
    year: "",
    logoSrc: "/images/certifications/salesforce.svg",
    logoAlt: "Salesforce logo",
  },
  {
    name: "Leading Teams: Developing as a Leader",
    issuer: "University of Illinois Urbana–Champaign",
    year: "",
    logoSrc: "/images/certifications/uiuc.svg",
    logoAlt: "University of Illinois wordmark",
  },
  {
    name: "Introduction to Negotiation: A Strategic Playbook for Becoming a Principled and Persuasive Negotiator",
    issuer: "Yale University",
    year: "",
    logoSrc: "/images/certifications/yale.svg",
    logoAlt: "Yale crest",
  },
];


