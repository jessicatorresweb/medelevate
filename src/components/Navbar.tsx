import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const openEmailClient = () => {
    window.location.href = "mailto:admin@medelevatesolutions.com";
  };

  const handleMobileNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    // Add a small delay to ensure the drawer closes before scrolling
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  };

  const scrollToSection = (sectionId: string) => {
    // For mobile view, we need to handle this differently
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the position to scroll to
      const offsetPosition = element.offsetTop - 80; // Adjust offset for navbar height
      
      // Use window.scrollTo for more reliable scrolling on mobile
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Debug information
      console.log(`Scrolling to ${sectionId} at position ${offsetPosition}`);
    } else {
      console.log(`Element with ID ${sectionId} not found`);
    }
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
            <Link to="/" className="mr-4 flex items-center">
              <img 
                src="/logo2.png" 
                alt="MedElevate Logo" 
                className="h-10 object-contain"
              />
            </Link>
            <Link to="/" className="text-2xl font-bold text-medelevate-dark">
              <span className="text-medelevate-primary">Med</span>Elevate Solutions
            </Link>
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
                <Button variant="ghost" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-4">
                <div className="flex flex-col space-y-4 items-center pt-4 pb-8 relative">
                  <Button 
                    variant="ghost" 
                    className="absolute top-2 right-2" 
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
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
