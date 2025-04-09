
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-medelevate-dark">
              <span className="text-medelevate-primary">Med</span>Elevate
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-medelevate-primary font-medium transition-colors">Services</a>
            <a href="#benefits" className="text-gray-600 hover:text-medelevate-primary font-medium transition-colors">Benefits</a>
            <a href="#about" className="text-gray-600 hover:text-medelevate-primary font-medium transition-colors">About Us</a>
            <Button className="bg-medelevate-primary hover:bg-medelevate-secondary text-white">
              Contact Us
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
