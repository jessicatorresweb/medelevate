
import { User, Award, ThumbsUp, TrendingUp } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { 
      icon: <User className="h-8 w-8 text-medelevate-primary mb-3" />, 
      value: "100+", 
      label: "Healthcare Clients" 
    },
    { 
      icon: <Award className="h-8 w-8 text-medelevate-primary mb-3" />, 
      value: "16+", 
      label: "Years of Experience" 
    },
    { 
      icon: <ThumbsUp className="h-8 w-8 text-medelevate-primary mb-3" />, 
      value: "98%", 
      label: "Client Satisfaction" 
    },
    { 
      icon: <TrendingUp className="h-8 w-8 text-medelevate-primary mb-3" />, 
      value: "30%", 
      label: "Avg. Efficiency Improvement" 
    }
  ];

  return (
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-medelevate-dark mb-4">
                Expert Healthcare Consultants Working For You
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced healthcare professionals brings decades of combined experience in hospital administration, clinical operations, health informatics, and regulatory compliance.
              </p>
              <p className="text-lg text-gray-600">
                MedElevate Solutions was founded with a single mission: to help healthcare providers navigate complex operational challenges so they can focus on what matters most – patient care. We combine deep industry knowledge with innovative approaches to deliver sustainable results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-medelevate-dark">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-medelevate-accent rounded-full opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Healthcare professionals meeting" 
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
