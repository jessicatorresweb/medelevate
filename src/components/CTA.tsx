
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-medelevate-primary to-medelevate-secondary py-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our healthcare optimization experts to discover how MedElevate Solutions can help your organization thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-medelevate-primary hover:bg-medelevate-light text-lg px-8 py-6">
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-medelevate-primary text-lg px-8 py-6 transition-colors"
            >
              Request Information <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
