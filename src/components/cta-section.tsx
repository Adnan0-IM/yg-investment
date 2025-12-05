import { Link } from "react-router";

interface Cta11Props {
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageSrcD?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonHref?: string;
}

const Cta11 = ({
  heading = "Contact Us",
  description = "Have a request or need more details about our services? Reach out to us today.",
  imageSrc = "/yg-light.svg",
  imageSrcD = "yg-dark.svg",
  imageAlt = "Contact us image",
}: Cta11Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <Link
          to="/contact"
          aria-label="Go to Contact page"
          className="group grid justify-items-center"
        >
          <div
            className="
              bg-muted flex w-full max-w-4xl flex-col lg:gap-12 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:px-12
              cursor-pointer
              transition
              hover:bg-accent/20
              hover:shadow-md
              active:scale-[0.99]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/50
            "
          >
            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                {heading}
              </h3>
              <p className="text-muted-foreground max-w-xl lg:text-lg">
                {description}
              </p>
            </div>
            <div className="shrink-0">
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                <div
                  className="
                    relative size-32 overflow-hidden rounded-lg sm:size-40 
                    ring-0 transition group-hover:ring-2 group-hover:ring-primary/40
                  "
                >
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="object-cover dark:hidden"
                  />

                  <img
                    src={imageSrcD}
                    alt={imageAlt}
                    className="object-cover dark:block hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export { Cta11 };
