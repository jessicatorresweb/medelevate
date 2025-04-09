
import { 
  ClipboardCheck, 
  BarChart2, 
  Shield, 
  FileText 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <ClipboardCheck className="h-10 w-10 text-medelevate-primary" />,
      title: "Accreditation Alignment",
      description: "Ensure your organization meets all necessary healthcare accreditation standards with our expert guidance and implementation support."
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-medelevate-primary" />,
      title: "EHR Streamlining",
      description: "Optimize your Electronic Health Record systems for maximum efficiency, usability, and compliance with current regulations."
    },
    {
      icon: <Shield className="h-10 w-10 text-medelevate-primary" />,
      title: "Credentialing",
      description: "Streamline your provider credentialing process with our comprehensive verification and management solutions."
    },
    {
      icon: <FileText className="h-10 w-10 text-medelevate-primary" />,
      title: "Best Practices Implementation",
      description: "Implement industry-leading best practices tailored to your specific healthcare environment to improve outcomes."
    },
  ];

  return (
    <div id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medelevate-dark mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600">
            MedElevate Solutions delivers targeted consulting services designed to transform healthcare operations and enhance patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-medelevate-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
