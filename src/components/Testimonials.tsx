
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MedElevate Solutions transformed our EHR workflow and reduced documentation time by 35%. Their expertise in healthcare operations is unmatched.",
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer, Regional Medical Center"
    },
    {
      quote: "Their accreditation alignment services helped us achieve Joint Commission compliance with minimal disruption to our daily operations.",
      name: "Mark Thompson",
      title: "Director of Quality, Community Health System"
    },
    {
      quote: "The credentialing solution implemented by MedElevate reduced our processing time from weeks to days, allowing us to onboard providers faster.",
      name: "Jennifer Williams",
      title: "HR Director, Multispecialty Clinic Group"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medelevate-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from healthcare organizations that have transformed their operations with MedElevate Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg h-full bg-medelevate-light/50">
              <CardContent className="pt-8 pb-6 px-6 flex flex-col h-full">
                <Quote className="h-10 w-10 text-medelevate-primary opacity-40 mb-4" />
                <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-medelevate-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
