
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medelevate-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-medelevate-accent">Med</span>Elevate
            </h3>
            <p className="text-gray-300 mb-4">
              Healthcare consulting dedicated to optimizing and streamlining healthcare operations for improved efficiency and patient care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-medelevate-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-medelevate-accent">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-medelevate-accent">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-medelevate-accent">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Accreditation Alignment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">EHR Streamlining</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Credentialing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Best Practices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Compliance Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-medelevate-accent flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-medelevate-accent flex-shrink-0" />
                <span>info@medelevatesolutions.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-medelevate-accent flex-shrink-0" />
                <span>123 Healthcare Avenue, Suite 500<br />Boston, MA 02108</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} MedElevate Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
