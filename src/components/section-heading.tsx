import type { FC } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center,
}) => {
  return (
    <div className={`mb-8 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
};
