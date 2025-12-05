import Layout from "./components/layout/layout";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import { RouteToTop } from "./components/route-to-top";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {" "}
        <RouteToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />} />

            <Route path="services" element={<Services />}>
              <Route path=":serviceId" element={<Services />} />
            </Route>

            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
export default App;
