import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Linkedin,
  type LucideIcon,
  PlusIcon,
} from "lucide-react";
import type React from "react";

type ContactInfoProps = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
  span?: boolean;
};

type ContactCardProps = React.ComponentProps<"div"> & {
  // Content props
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

export function ContactCard({
  title = "Contact With Us",
  description = "If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.",
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "relative grid h-full w-full border md:grid-cols-2 lg:grid-cols-5",
        className,
      )}
      {...props}
    >
      <PlusIcon
        className="-top-[12.5px] -left-[12.5px] absolute h-6 w-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="-top-[12.5px] -right-[12.5px] absolute h-6 w-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="-bottom-[12.5px] -left-[12.5px] absolute h-6 w-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="-right-[12.5px] -bottom-[12.5px] absolute h-6 w-6"
        strokeWidth={1}
      />

      <div className="col-span-1 flex flex-col justify-between dark:bg-secondary/50 lg:col-span-3 bg-muted">
        <div className="relative h-full space-y-4 px-4 py-8 md:p-8">
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-muted-foreground text-sm md:text-base lg:text-lg">
            {description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 ">
            {contactInfo?.map((info) => (
              <ContactInfo
                className={`${info.span && "sm:col-span-2"}`}
                key={info.label}
                {...info}
              />
            ))}
          </div>
          <div className="flex items-center gap-4 ml-2">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary"
            >
              <Facebook className="size-6" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary"
            >
              <Instagram className="size-6" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary"
            >
              <Linkedin className="size-6" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "col-span-1 lg:col-span-2 flex h-full w-full items-center border-t bg-card px-4 py-8 md:border-t-0 md:border-l dark:bg-card/50",
          formSectionClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div className={cn("flex items-center gap-3 py-3", className)} {...props}>
      <div className="rounded-lg border bg-card p-3 shadow">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-muted-foreground text-xs">{value}</p>
      </div>
    </div>
  );
}
