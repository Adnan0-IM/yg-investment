import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Image } from "@unpic/react";
import abaya from "@/assets/abaya.jpeg";
import farm from "@/assets/farm.jpeg";
import truck from "@/assets/truck.jpeg";
import medicine from "@/assets/medicine-2.jpeg";
import fabric from "@/assets/fabric.jpeg";
import ship from "@/assets/ship.png";
import { motion, cubicBezier } from "framer-motion";
import { viewport, container, item } from "@/lib/motion";

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section className="container mx-auto px-4 lg:px-8">
          <div className="pb-24 pt-16 md:pb-32 ">
            <div className="relative mx-auto flex max-w-6xl flex-col pr-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <motion.h1
                  className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={viewport}
                >
                  YG Global Investment Ltd.
                </motion.h1>
                <motion.p
                  className="mt-8 max-w-2xl text-pretty text-lg"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={viewport}
                >
                  Reliable services in trade, supply, textiles, agriculture, and
                  logistics.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={viewport}
                >
                  <i>
                    Connecting businesses with quality products and dependable
                    support.
                  </i>
                </motion.p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link to="/services">
                      <span className="text-nowrap">Explore Our Services</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link to="/contact">
                      <span className="text-nowrap">Contact Us</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative  ml-auto mt-10 w-full sm:h-[28rem] lg:absolute lg:inset-0 lg:-right-20 lg:-top-16 lg:order-last lg:flex lg:h-max lg:w-2/3 lg:items-center">
                <div className="relative mx-auto w-full mx-w-3xl lg:max-w-2xl">
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute left-6 top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-teal-300/30 to-cyan-400/30 blur-2xl"></div>
                    <div className="absolute right-10 bottom-6 h-44 w-44 rounded-full bg-gradient-to-tr from-fuchsia-300/25 to-indigo-400/25 blur-2xl"></div>
                  </div>

                  <motion.div
                    className="relative h-[26rem]"
                    initial={{ opacity: 0, scale: 0.98, y: 12 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: cubicBezier(0.22, 1, 0.36, 1),
                    }}
                    viewport={viewport}
                  >
                    <motion.div
                      className="absolute left-4 top-10 w-40 sm:w-44 md:w-48 rotate-[-6deg]"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        className="shadow-2xl ring-1 ring-black/10 object-cover"
                        src={farm}
                        alt="Farm"
                        height={260}
                        width={200}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute left-1/2 top-2 w-52 sm:w-60 md:w-64 -translate-x-1/2 rotate-[3deg]"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                    >
                      <Image
                        className="shadow-2xl ring-1 ring-black/10 object-cover"
                        src={ship}
                        alt="Ship"
                        height={320}
                        width={260}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute right-16 bottom-6 w-36 sm:w-40 md:w-44 rotate-[-3deg]"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.1,
                      }}
                    >
                      <Image
                        className="shadow-2xl ring-1 ring-black/10 object-cover"
                        src={truck}
                        alt="Truck"
                        height={240}
                        width={200}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute left-24 bottom-4 w-32 sm:w-36 md:w-40 rotate-[8deg]"
                      animate={{ y: [0, -7, 0] }}
                      transition={{
                        duration: 6.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.15,
                      }}
                    >
                      <Image
                        className="shadow-xl ring-1 ring-black/10 object-cover"
                        src={fabric}
                        alt="Fabric"
                        height={220}
                        width={180}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute right-24 top-8 w-28 sm:w-32 md:w-36 rotate-[-10deg]"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 6.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.05,
                      }}
                    >
                      <Image
                        className="shadow-xl ring-1 ring-black/10 object-cover"
                        src={medicine}
                        alt="Medicine"
                        height={220}
                        width={180}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute left-1/2 top-40 w-28 sm:w-32 md:w-36 -translate-x-1/3 rotate-[12deg]"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 5.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.25,
                      }}
                    >
                      <Image
                        className="shadow-xl ring-1 ring-black/10 object-cover"
                        src={abaya}
                        alt="Abaya"
                        height={220}
                        width={180}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Stats section (replaces "Powering the best teams") */}
        <section className="bg-background pb-16 md:pb-32">
          <div className="m-auto max-w-6xl px-6">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={item}
            >
              <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                Company Stats
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Delivering reliable value across sectors
              </h2>
              <p className="mt-3 text-muted-foreground">
                Trusted by organizations for sourcing, logistics, textiles, and
                more.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={container}
            >
              <motion.div
                className="rounded-lg border bg-background p-5 text-center"
                variants={item}
              >
                <div className="text-3xl font-bold ">500+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Orders fulfilled
                </div>
              </motion.div>
              <motion.div
                className="rounded-lg border bg-background p-5 text-center"
                variants={item}
              >
                <div className="text-3xl font-bold ">30+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Supplier partners
                </div>
              </motion.div>
              <motion.div
                className="rounded-lg border bg-background p-5 text-center"
                variants={item}
              >
                <div className="text-3xl font-bold ">7</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Service categories
                </div>
              </motion.div>
              <motion.div
                className="rounded-lg border bg-background p-5 text-center"
                variants={item}
              >
                <div className="text-3xl font-bold ">10+ yrs</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Industry experience
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
