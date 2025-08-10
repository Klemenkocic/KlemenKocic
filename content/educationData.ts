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
};

export const education: EducationItem[] = [
  {
    institution: "Gimnazija Poljane",
    program: "Upper Secondary (Gymnasium)",
    location: "Ljubljana, Slovenia",
    from: "2015",
    to: "2019",
    imageSrc: "/images/education/gimanzija-poljane.svg",
    imageAlt: "Gimnazija Poljane building, Ljubljana",
    logoSrc: "/images/education/gimnazija-poljane-logo.svg",
    logoAlt: "Gimnazija Poljane crest",
  },
  {
    institution: "University of Ljubljana — School of Economics and Business",
    program: "B.Sc. International Business",
    location: "Ljubljana, Slovenia",
    from: "2019",
    to: "2023",
    imageSrc: "/images/education/seb-ljubljana.svg",
    imageAlt: "School of Economics and Business, University of Ljubljana",
    logoSrc: "/images/education/seb-logo.svg",
    logoAlt: "SEB LU logo",
  },
];


