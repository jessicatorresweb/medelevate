
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Enhanced Operational Efficiency",
      description: "Streamline workflows and processes to reduce waste and increase productivity throughout your organization."
    },
    {
      title: "Ensured Regulatory Compliance",
      description: "Stay ahead of changing healthcare regulations with proactive compliance strategies and implementation."
    },
    {
      title: "Improved Patient Care",
      description: "Focus more resources on patient care by optimizing administrative and operational processes."
    },
    {
      title: "Seamless Technology Integration",
      description: "Integrate new and existing technologies smoothly to create cohesive healthcare information systems."
    },
    {
      title: "Cost Reduction",
      description: "Identify inefficiencies and implement solutions that reduce operational costs without sacrificing quality."
    },
    {
      title: "Staff Empowerment",
      description: "Equip your team with the tools, processes, and knowledge to excel in their roles."
    }
  ];

  return (
    <div id="benefits" className="py-20 bg-medelevate-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medelevate-dark mb-4">
            How MedElevate Benefits Your Organization
          </h2>
          <p className="text-lg text-gray-600">
            Our tailored solutions deliver measurable improvements across all aspects of healthcare operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-7 w-7 text-medelevate-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-medelevate-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
