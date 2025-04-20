
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update openConsultationForm to open mailto link for Contact Us button
  const openEmailClient = () => {
    window.location.href = "mailto:admin@medelevatesolutions.com";
  };

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
            <img 
              src="/logo2.png" 
              alt="MedElevate Logo" 
              className="h-10 mr-4 object-contain"
            />
            <a href="#" className="text-2xl font-bold text-medelevate-dark">
              <span className="text-medelevate-primary">Med</span>Elevate Solutions
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-medelevate-primary font-medium transition-colors">Services</a>
            <a href="#benefits" className="text-gray-600 hover:text-medelevate-primary font-medium transition-colors">Benefits</a>
            <a href="#about" className="text-gray-600 hover:text-medelevate-primary font-medium transition-colors">About Us</a>
            <Button onClick={openEmailClient} className="bg-medelevate-primary hover:bg-medelevate-secondary text-white">
              Contact Us
            </Button>
          </div>
          <div className="md:hidden">
            <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-4">
                <div className="flex flex-col space-y-4 items-center pt-6 pb-8">
                  <a 
                    href="#services" 
                    className="text-xl text-gray-600 hover:text-medelevate-primary font-medium transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a 
                    href="#benefits" 
                    className="text-xl text-gray-600 hover:text-medelevate-primary font-medium transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Benefits
                  </a>
                  <a 
                    href="#about" 
                    className="text-xl text-gray-600 hover:text-medelevate-primary font-medium transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </a>
                  <Button 
                    onClick={() => {
                      openEmailClient();
                      setMobileMenuOpen(false);
                    }} 
                    className="bg-medelevate-primary hover:bg-medelevate-secondary text-white mt-2"
                  >
                    Contact Us
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
