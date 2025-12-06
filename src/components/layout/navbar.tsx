"use client";

import {
  Boxes,
  Handshake,
  Import,
  Menu,
  Shirt,
  Sprout,
  Store,
  Truck,
} from "lucide-react";
import { useLocation, Link } from "react-router";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // add SheetClose
} from "@/components/ui/sheet";
import { ModeToggle } from "../mode-toggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: { title: string; url: string };
    signup: { title: string; url: string };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/logo.svg",
    alt: "logo",
    title: "YG Global Investment Ltd.",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Services",
      url: "/services",
      items: [
        {
          title: "General Merchant",
          description:
            "We provide access to various goods for businesses and individuals, offering reliable sourcing and supply.",
          icon: <Store className="size-5  shrink-0" />,
          url: "/services/general-merchant",
        },
        {
          title: "Import & Export",
          description:
            "We support cross-border trade by handling sourcing, documentation, and shipment of goods.",
          icon: <Import className="size-5  shrink-0" />,
          url: "/services/import-export",
        },
        {
          title: "Contract Services",
          description:
            "We work with private and public sector clients to supply goods for small and large-scale projects.",
          icon: <Handshake className="size-5  shrink-0" />,
          url: "/services/contract-services",
        },
        {
          title: "General Supply",
          description:
            "We deliver essential items and specialized products to organizations, institutions, and businesses.",
          icon: <Boxes className="size-5  shrink-0" />,
          url: "/services/general-supply",
        },
        {
          title: "Textile",
          description:
            "We supply fabrics, clothing materials, and other textile products for commercial use.",
          icon: <Shirt className="size-5  shrink-0" />,
          url: "/services/textile",
        },
        {
          title: "Agriculture",
          description:
            "We source and supply farm products and agricultural commodities for local and international markets.",
          icon: <Sprout className="size-5  shrink-0" />,
          url: "/services/agriculture",
        },
        {
          title: "Logistics",
          description:
            "We provide transportation support, warehousing assistance, and distribution solutions for smooth delivery.",
          icon: <Truck className="size-5  shrink-0" />,
          url: "/services/logistics",
        },
      ],
    },
    { title: "About Us", url: "/about" },
  ],
}: Navbar1Props) => {
  const location = useLocation(); // get current route
  const [open, setOpen] = useState(false);

  return (
    <section className="py-4">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img
                src={"/yg-light.svg"}
                className="max-h-8 dark:hidden"
                alt={logo.alt}
              />
              <img
                src={"yg-dark.svg"}
                className="max-h-8 hidden dark:block "
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </Link>

            <div className="flex items-center">
              {/* Key forces remount on route change -> menu closes */}
              <NavigationMenu key={location.pathname}>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, item.title))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <Button>
            <Link to={"/contact"}>Get In Touch</Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img
                src={"/yg-light.svg"}
                className="max-h-8 dark:hidden"
                alt={logo.alt}
              />
              <img
                src={"yg-dark.svg"}
                className="max-h-8 hidden dark:block "
                alt={logo.alt}
              />
            </Link>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-2">
                      <img
                        src={"/yg-light.svg"}
                        className="max-h-8 dark:hidden"
                        alt={logo.alt}
                      />
                      <img
                        src={"yg-dark.svg"}
                        className="max-h-8 hidden dark:block "
                        alt={logo.alt}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) =>
                      renderMobileMenuItem(item, () => setOpen(false))
                    )}
                  </Accordion>

                  <Button asChild>
                    <SheetClose asChild>
                      <Link to={"/contact"}>Contact Us</Link>
                    </SheetClose>
                  </Button>
                  <div className="">
                    <ModeToggle mobile />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, key?: string) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={key || item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          <div className="w-[680px] md:w-[820px]">
            <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3">
              {item.items.map((subItem) => (
                <NavigationMenuLink asChild key={subItem.title}>
                  <SubMenuLink item={subItem} />
                </NavigationMenuLink>
              ))}

              {/* CTA tile */}
              <NavigationMenuLink asChild>
                <Link
                  to="/services"
                  className="group flex h-full min-h-[84px] flex-col justify-center rounded-lg shadow p-3 text-left transition-colors hover:bg-muted hover:text-accent-foreground"
                >
                  <span className="text-sm font-semibold">
                    View all services
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Explore everything we offer
                  </span>
                </Link>
              </NavigationMenuLink>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={key || item.title}>
      <NavigationMenuLink asChild>
        <Link
          to={item.url}
          className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, onSelect: () => void) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SheetClose asChild key={subItem.title}>
              <SubMenuLink item={subItem} onSelect={onSelect} />
            </SheetClose>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <SheetClose asChild key={item.title}>
      <Link to={item.url} className="text-md font-semibold" onClick={onSelect}>
        {item.title}
      </Link>
    </SheetClose>
  );
};

const SubMenuLink = ({
  item,
  onSelect,
}: {
  item: MenuItem;
  onSelect?: () => void;
}) => {
  return (
    <Link
      className="group flex h-full min-h-[84px] select-none items-start gap-3 rounded-lg shadow p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
      to={item.url}
      onClick={onSelect}
    >
      <div className="text-foreground/80 flex size-8 px-1 items-center justify-center rounded-md ">
        {item.icon}
      </div>
      <div className="space-y-1">
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-xs">{item.description}</p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };
