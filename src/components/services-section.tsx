"use client";

import {
  Package,
  ShoppingBag,
  Import,
  FileCheck,
  Shirt,
  Sprout,
  Truck,
} from "lucide-react";
import { Link } from "react-router";

const ServicesSection = () => {
  const services = [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "General Merchant",
      description:
        "We provide access to various goods for businesses and individuals, offering reliable sourcing and supply.",
      href: "/services/general-merchant",
      thumbnail: "",
    },
    {
      icon: <Import className="h-6 w-6" />,
      title: "Import & Export",
      description:
        "We support cross-border trade by handling sourcing, documentation, and shipment of goods.",
      href: "/services/import-export",
      thumbnail: "",
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Contract Services",
      description:
        "We work with private and public sector clients to supply goods for small and large-scale projects.",
      href: "/services/contract-services",
      thumbnail: "",
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "General Supply",
      description:
        "We deliver essential items and specialized products to organizations, institutions, and businesses.",
      href: "/services/general-supply",
      thumbnail: "",
    },
    {
      icon: <Shirt className="h-6 w-6" />,
      title: "Textile",
      description:
        "We supply fabrics, clothing materials, and other textile products for commercial use.",
      href: "/services/textile",
      thumbnail: "",
    },
    {
      icon: <Sprout className="h-6 w-6" />,
      title: "Agriculture",
      description:
        "We source and supply farm products and agricultural commodities for local and international markets.",
      href: "/services/agriculture",
      thumbnail: "",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Logistics",
      description:
        "We provide transportation support, warehousing assistance, and distribution solutions for smooth delivery.",
      href: "/services/logistics",
      thumbnail: "",
    },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className=" space-y-12">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
              Our Services
            </span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Our Services
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              Comprehensive commercial and supply solutions across key sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border p-0 overflow-hidden transition-shadow hover:shadow-sm"
              >
                {service.thumbnail && (
                  <div className="h-32 w-full bg-muted">
                    <img
                      src={service.thumbnail}
                      alt={`${service.title} thumbnail`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted rounded-full p-3 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex">
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              View Detailed Services
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
      </div>
    </section>
  );
};

export { ServicesSection };
