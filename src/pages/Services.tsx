import { Service } from "@/components/service";
import { services } from "@/data/services";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { container, item, viewport } from "@/lib/motion";

export default function Services() {
  const location = useLocation();
  const strippedPath = location.pathname.split("/")[2] || "";

  type ServiceItem = {
    id: string;
    title: string;
    introTitle: string;
    introText: string;
    content: string | React.ReactNode;
    heroImage?: string;
    thumbnail?: string;
  };

  const service = services.find((s: ServiceItem) => s.id === strippedPath);
  if (location.pathname === "/services" || location.pathname === "/services/") {
    return (
      <main className="py-16 md:py-24">
        <section className="container mx-auto px-4 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center" initial="hidden" whileInView="show" viewport={viewport} variants={item}>
            <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              Our Services
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Services Overview
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Comprehensive commercial and supply solutions across key sectors.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={container}
          >
            {services.map((s) => (
              <motion.article
                key={s.id}
                className="overflow-hidden rounded-lg border bg-background transition-shadow hover:shadow-sm"
                variants={item}
                whileHover={{ y: -2 }}
              >
                {s.thumbnail && (
                  <div className="h-36 w-full bg-muted sm:h-40">
                    <img
                      src={s.thumbnail}
                      alt={`${s.title} thumbnail`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.introText}</p>
                  <div className="flex">
                    <Link
                      to={`/services/${s.id}`}
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      aria-label={`Learn more about ${s.title}`}
                    >
                      Learn More
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
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div className="mx-auto mt-12 max-w-3xl text-center" initial="hidden" whileInView="show" viewport={viewport} variants={item}>
            <p className="text-sm text-muted-foreground">
              Can’t find what you’re looking for? Contact us to discuss custom
              requests.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    );
  }
  if (!service) {
    return (
      <main className="py-20">
        <div className="container">
          <h1 className="text-2xl font-semibold">Service not found</h1>
          <p className="mt-2 text-muted-foreground">
            The requested service “{strippedPath}” does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main key={strippedPath} className="">
      <Service
        title={service.title}
        introText={service.introText}
        introTitle={service.introTitle}
        content={service.content}
        heroImage={service.heroImage}
        key={service.id}
      />
    </main>
  );
}
