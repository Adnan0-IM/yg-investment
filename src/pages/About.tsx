import { Card } from "@/components/ui/card";
import { Building2, Target, Eye, CheckCircle2 } from "lucide-react";
import ship from "@/assets/ship.png";

export default function AboutPage() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative border-b">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={ship}
            alt="Shipping and Logistics"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl">
                <span className="inline-flex items-center rounded-full border bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                  About Us
                </span>
                <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                  About YG Global Investment Ltd.
                </h1>
                <p className="mt-4 text-base text-white/90 md:text-lg">
                  Your trusted partner in global commerce, delivering excellence
                  across multiple industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-4 md:gap-8">
            <div className="flex-shrink-0">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Who We Are
              </h2>
              <p className="mt-4 md:text-lg leading-relaxed text-muted-foreground">
                YG Global Investment Ltd. is a dependable company involved in
                trading, supply, textiles, agriculture, logistics, and
                contract-based services. We support businesses by providing
                consistent access to quality products and smooth delivery
                processes. Over time, we have developed strong links with
                suppliers, producers, and distributors, allowing us to serve
                clients across different sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="mt-4 md:text-lg leading-relaxed text-muted-foreground">
                To provide reliable services that support businesses, improve
                supply efficiency, and create long-lasting business
                relationships.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <Eye className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold ">Our Vision</h3>
              </div>
              <p className="mt-4 md:text-lg leading-relaxed text-muted-foreground">
                To become a trusted partner known for quality, consistency, and
                dependable service across local and international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              Our Values
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              The principles that guide everything we do
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {[
              {
                title: "Integrity",
                description: "We operate with transparency and honesty.",
              },
              {
                title: "Quality",
                description:
                  "We maintain high standards in every service we provide.",
              },
              {
                title: "Timeliness",
                description: "We understand the importance of prompt delivery.",
              },
              {
                title: "Customer Focus",
                description: "We work with the needs of clients in mind.",
              },
            ].map((value) => (
              <Card
                key={value.title}
                className="border border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold ">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 lg:px-8 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Ready to Partner With Us?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Let's discuss how YG Global Investment Ltd. can support your
            business growth.
          </p>
          
             <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get In Touch
          </a>
        
         
        </div>
      </section>
    </main>
  );
}
