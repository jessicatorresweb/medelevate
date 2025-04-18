
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const openConsultationForm = () => {
    window.open(
      'https://form.jotform.com/251076529160152',
      'blank',
      'scrollbars=yes,toolbar=no,width=700,height=500'
    );
  };

  return (
    <div className="relative bg-gradient-to-br from-white to-medelevate-light pt-28 pb-20 md:pt-32 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medelevate-dark leading-tight">
              Elevate Your <span className="text-medelevate-primary">Healthcare</span> Operations
            </h1>
            <p className="text-lg text-gray-600 md:pr-10 py-4">
              Expert healthcare consulting designed to streamline processes, improve patient care, and ensure compliance while maximizing operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-medelevate-primary hover:bg-medelevate-secondary text-white text-lg py-6 px-8"
                onClick={openConsultationForm}
              >
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="border-medelevate-primary text-medelevate-primary hover:bg-medelevate-light py-6 px-8 text-lg">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-medelevate-accent rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-medelevate-primary rounded-full opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Healthcare professionals" 
                className="rounded-lg shadow-xl w-full h-auto object-cover z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
