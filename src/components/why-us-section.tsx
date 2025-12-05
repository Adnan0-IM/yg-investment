import React from "react";
import { GridBackgroundDemo } from "./grid-backgroud";
import { motion } from "framer-motion";
import { container, item, viewport } from "@/lib/motion";

const items = [
  {
    title: "Consistent and reliable service",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 7l-9 9-5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Wide network of suppliers",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 7l9 5 9-5-9-4-9 4zm0 5l9 5 9-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Competitive sourcing options",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12h14M12 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Strong focus on customer satisfaction",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 21s-7-4.35-7-10a7 7 0 1114 0c0 5.65-7 10-7 10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const WhyUs: React.FC = () => {
  return (
    <GridBackgroundDemo>
      {" "}
      <motion.section
        className="py-20 relative z-20"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="container mx-auto px-4 lg:px-8 md:min-w-3xl lg:min-w-5xl">
          <motion.div className="text-center" variants={item}>
            <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              What Sets Us Apart
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              We deliver dependable value across every engagement.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2"
            variants={container}
          >
            {items.map((itemData) => (
              <motion.div
                key={itemData.title}
                className="rounded-lg border bg-background p-6 transition hover:bg-accent/20 hover:shadow-sm"
                variants={item}
                whileHover={{ y: -2 }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {itemData.icon}
                </div>
                <h3 className="text-base font-medium">{itemData.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </GridBackgroundDemo>
  );
};

export default WhyUs;
