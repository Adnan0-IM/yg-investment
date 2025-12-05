"use client";
import { motion } from "framer-motion";
import {  viewport } from "@/lib/motion";

type ServiceProps = {
  title: string;
  introTitle: string;
  introText: string;
  content: React.ReactNode | string;
  heroImage?: string;
};

const Service = ({
  title,
  introTitle,
  introText,
  content,
  heroImage,
}: ServiceProps) => {
  return (
    <section className="pb-32">
      {/* Full Width Hero */}
      <div className="bg-muted">
        {heroImage ? (
          <motion.div
            className="relative h-[220px] sm:h-[280px] md:h-[360px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
          >
            <img
              src={heroImage}
              alt={`${title} hero`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 flex items-center">
              <div className="container text-center">
                <motion.h1
                  className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {title}
                </motion.h1>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="py-24 md:py-32"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5 }}
          >
            <div className="container text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>
            </div>
          </motion.div>
        )}
      </div>

      {/* Intro Section */}
      <motion.div
        className="py-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-8 text-left">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {introTitle}
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              {introText}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="prose prose-sm dark:prose-invert mx-auto max-w-3xl">
            {/* Render content directly to support rich nodes */}
            {typeof content === "string" ? <p>{content}</p> : content}

            {/* <h2>Creating Meaningful Digital Experiences</h2> */}
            {/* <p> */}
            {/*   We combine user research, information architecture, and visual */}
            {/*   design to deliver experiences that drive engagement and */}
            {/*   conversions. */}
            {/* </p> */}
            {/**/}
            {/* <p> */}
            {/*   Through comprehensive user research and testing, we validate */}
            {/*   design decisions with real data. Our iterative design process */}
            {/*   ensures that every element serves a purpose and contributes to */}
            {/*   your business goals while providing an exceptional user */}
            {/*   experience. */}
            {/* </p> */}
            {/**/}
            {/* <p> */}
            {/*   We specialize in creating design systems that scale with your */}
            {/*   business, ensuring consistency across all touchpoints while */}
            {/*   maintaining flexibility for future growth and evolution. */}
            {/* </p> */}
            {/**/}
            {/* <p> */}
            {/*   Our collaborative approach involves stakeholders throughout the */}
            {/*   design process, from initial wireframes to final prototypes. This */}
            {/*   ensures alignment between business objectives and user needs, */}
            {/*   resulting in products that succeed in the market. */}
            {/* </p> */}
            {/**/}
            {/* <p> */}
            {/*   Every design decision is backed by research and testing, creating */}
            {/*   solutions that are not just visually appealing but strategically */}
            {/*   sound and user-validated. */}
            {/* </p> */}
            {/**/}
            {/* <h2>Our UX/UI Design Services</h2> */}
            {/* <ul> */}
            {/*   <li>User research and persona development</li> */}
            {/*   <li>Information architecture and user journey mapping</li> */}
            {/*   <li>Wireframing and interactive prototyping</li> */}
            {/*   <li>Visual design and brand integration</li> */}
            {/*   <li>Usability testing and design validation</li> */}
            {/*   <li>Design system creation and documentation</li> */}
            {/* </ul> */}
            {/**/}
            {/* <h2>Strategic Design for Business Success</h2> */}
            {/* <p> */}
            {/*   Our design philosophy centers on creating interfaces that bridge */}
            {/*   the gap between user needs and business objectives. We understand */}
            {/*   that great UX/UI design is not just about aesthetics—it's about */}
            {/*   creating meaningful interactions that drive results. */}
            {/* </p> */}
            {/**/}
            {/* <p> */}
            {/*   From initial concept to final implementation, we ensure that every */}
            {/*   design element contributes to a cohesive user experience that */}
            {/*   reflects your brand values and supports your business goals. Our */}
            {/*   designs are optimized for performance, accessibility, and */}
            {/*   scalability across all devices and platforms. */}
            {/* </p> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export { Service };
