export type EducationItem = {
  institution: string;
  program: string;
  location?: string;
  from: string;
  to: string;
  imageSrc: string;
  imageAlt: string;
  logoSrc?: string;
  logoAlt?: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    institution: "University of Ljubljana — School of Economics and Business",
    program: "B.A. International Business",
    location: "Ljubljana, Slovenia",
    from: "2019",
    to: "2023",
    imageSrc: "/images/Univerza v Ljubljani.png",
    imageAlt: "School of Economics and Business, University of Ljubljana",
    logoSrc: "/images/education/seb-logo.svg",
    logoAlt: "SEB LU logo",
    note: "Self-taught engineer since 2018. Shipped production iOS, Android, web, blockchain, AI systems, and knowledge graphs alongside the degree.",
  },
  {
    institution: "ISCTE — Instituto Universitário de Lisboa",
    program: "Erasmus Exchange — International Business",
    location: "Lisbon, Portugal",
    from: "2022",
    to: "2022",
    imageSrc: "/images/Iscte.png",
    imageAlt: "ISCTE University Institute of Lisbon, Portugal",
  },
  {
    institution: "University of Seoul",
    program: "Bilateral Exchange — Business Administration",
    location: "Seoul, South Korea",
    from: "2021",
    to: "2022",
    imageSrc: "/images/University_of_Seoul.svg.png",
    imageAlt: "University of Seoul campus, South Korea",
  },
  {
    institution: "Gimnazija Poljane",
    program: "Upper Secondary (Gymnasium)",
    location: "Ljubljana, Slovenia",
    from: "2015",
    to: "2019",
    imageSrc: "/images/Gimanzija Poljane.png",
    imageAlt: "Gimnazija Poljane building, Ljubljana",
    logoSrc: "/images/education/gimnazija-poljane-logo.svg",
    logoAlt: "Gimnazija Poljane crest",
  },
];


