import { Cta11 } from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import WhyUs from "@/components/why-us-section";
import { Check } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { container, item, pop, viewport } from "@/lib/motion";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <WhyUs />
      <Cta11 />
    </main>
  );
}

function AboutUsSection() {
  return (
    <motion.section
      className="py-20 bg-muted/30"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div className="mx-auto max-w-3xl text-center" variants={item}>
          <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            About Us
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Short Overview
          </h2>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            YG Global Investment Ltd. is a trusted company offering a wide range
            of commercial and supply-based services. We support clients with
            dependable sourcing, delivery, and trading solutions across
            different sectors. Our focus is on quality, timely service, and
            long-term business relationships.
          </p>

          <motion.div className="mt-8" variants={item}>
            <motion.div whileHover="hover" whileTap="tap" variants={pop}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Learn More About Us
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M13 5l7 7-7 7M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
          variants={container}
        >
          <motion.div
            className="rounded-lg border bg-background p-4 text-center"
            variants={item}
            whileHover="hover"
            whileTap="tap"
            // variants={Object.assign({}, item, {})}
          >
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check />
            </div>
            <p className=" font-medium">Dependable Delivery</p>
          </motion.div>

          <motion.div
            className="rounded-lg border bg-background p-4 text-center"
            variants={item}
            whileHover="hover"
            whileTap="tap"
          >
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check />
            </div>
            <p className=" font-medium">Quality First</p>
          </motion.div>

          <motion.div
            className="rounded-lg border bg-background p-4 text-center"
            variants={item}
            whileHover="hover"
            whileTap="tap"
          >
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check />
            </div>
            <p className=" font-medium">Long-Term Partnerships</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
