import Footer from "@/components/layout/footer";
import { Outlet } from "react-router";
import { Navbar } from "./navbar";
import { useEffect, useState } from "react";

export default function Layout() {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setShowShadow(window.scrollY >= 50);
    };

    // Initialize on mount
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`${
          showShadow ? "border-b" : ""
        } bg-background/70 backdrop-blur-md sticky top-0 z-50`}
      >
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
