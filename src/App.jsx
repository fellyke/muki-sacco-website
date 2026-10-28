
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrolltoTop";

import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/team";
import Gallery from "./pages/gallery";
import Loans from "./pages/loans";
import Savings from "./pages/savings";
import Membership from "./pages/membership";
import DigitalBanking from "./pages/digitalbanking";
import Contact from "./pages/contact";
import Insurance from "./pages/insurance";
import AppSelfRegistration from "./pages/AppSelfRegistration";

import "./index.css";

function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/membership" element={<Membership />} />

        <Route
          path="/digital-banking"
          element={<DigitalBanking />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/insurance" element={<Insurance />} />

        {/* App Self Registration */}
        <Route
          path="/AppSelfRegistration"
          element={<AppSelfRegistration />}
        />

        {/* Page Not Found */}
        <Route
          path="*"
          element={
            <main className="not-found">
              <h1>Page not found</h1>
              <p>
                The page you are looking for does not exist.
              </p>
              <a href="/">Return home</a>
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}
