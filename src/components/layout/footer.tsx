import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Footer() {
  return (
    <footer className=" border-t bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 grid gap-10 py-12 md:grid-cols-4">
        {/* LOGO + SHORT ABOUT */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/yg-light.svg"
              className="dark:hidden"
              alt="YG Global Logo"
              width={40}
              height={40}
            />

            <img
              src="/yg-dark.svg"
              className="hidden dark:block"
              alt="YG Global Logo"
              width={40}
              height={40}
            />
            <h3 className="text-xl font-semibold">YG Global</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A trusted supplier for textiles, farm items, medical essentials,
            contracts, and logistics across local and international markets.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="mb-3 font-semibold">Company</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
            <Link to="/services" className="hover:text-primary">
              Services
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="mb-3 font-semibold">Products & Supply</h4>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>Textiles</li>
            <li>Fashion Items</li>
            <li>Agricultural Goods</li>
            <li>Medical Essentials</li>
            <li>General Supply</li>
            <li>Logistics Support</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              Phone:&nbsp;
              <a href="tel:+2347070682920" className="hover:text-primary">
                +234 707 068 2920
              </a>
              ,&nbsp;
              <a href="tel:+919358910362" className="hover:text-primary">
                +91 93589 10362
              </a>
            </p>
            <p>
              Email:&nbsp;
              <a
                href="mailto:yusufgambohamza@gmail.com"
                className="hover:text-primary break-words"
              >
                yusufgambohamza@gmail.com
              </a>
            </p>
            <p className="leading-relaxed">
              Office Address:&nbsp; No A2-47 Unity Road, Gidan Adawiyya,
              opposite Rahama Hausa, Kwari Market, Kano.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t py-6">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} YG Global Investment Ltd. All rights
            reserved.
          </span>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
