
import { Phone, Mail, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  
  // Handle scrolling to sections on the homepage
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If not on homepage, navigate to homepage first
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If already on homepage, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-medelevate-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-medelevate-accent">Med</span>Elevate Solutions
            </h3>
            <p className="text-gray-300 mb-4">
              Healthcare consulting dedicated to optimizing and streamlining healthcare operations for improved efficiency and patient care.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/nyleen-flores-ba-fmsp-cpmsm-cpcs-cpco-casc-b525431b9/" target="_blank" className="text-gray-300 hover:text-medelevate-accent" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Accreditation Alignment</li>
              <li>EHR Streamlining</li>
              <li>Credentialing</li>
              <li>Best Practices</li>
              <li>Compliance Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#about" onClick={scrollToSection('about')} className="text-gray-300 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/#services" onClick={scrollToSection('services')} className="text-gray-300 hover:text-white">Services</a>
              </li>
              <li>
                <a href="/#ceo" onClick={scrollToSection('ceo')} className="text-gray-300 hover:text-white">Meet the CEO</a>
              </li>
              <li>
                <a href="/#testimonials" onClick={scrollToSection('testimonials')} className="text-gray-300 hover:text-white">Testimonials</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-medelevate-accent flex-shrink-0" />
                <a href="tel:+12394386667">(239) 438-6667</a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-medelevate-accent flex-shrink-0" />
                <a href="mailto:admin@medelevatesolutions.com">admin@medelevatesolutions.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 flex flex-col md:flex-row md:justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} MedElevate Solutions. All rights reserved.</p>
          <ul className="flex space-x-6">
            <li>
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="text-gray-300 hover:text-white">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="text-gray-300 hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

