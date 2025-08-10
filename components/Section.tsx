import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={`max-w-5xl mx-auto px-6 ${className ?? ""}`}>
      {children}
    </section>
  );
}

