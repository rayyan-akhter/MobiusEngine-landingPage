
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Ashwin",
    image: "/lovable-uploads/9dd7b54d-379f-4571-ae3b-66d48ef4337d.png",
    description: "is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.",
    vision: "Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams."
  },
  {
    name: "Nicole",
    image: "/lovable-uploads/9dd7b54d-379f-4571-ae3b-66d48ef4337d.png",
    description: "is an Executive coach at Mobius specializing in resume builds and career advisory.",
    additionalInfo: "With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential."
  }
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-700 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16">
          About Us
        </h2>
        
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="flex flex-col lg:flex-row items-start gap-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
              </div>
              
              <div className="text-white">
                <p className="text-lg">
                  <strong>{member.name}</strong> {member.description}
                </p>
                {member.vision && (
                  <p className="mt-4 text-white/90">{member.vision}</p>
                )}
                {member.additionalInfo && (
                  <p className="mt-4 text-white/90">{member.additionalInfo}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-4 text-center">
          <a href="#" className="text-white hover:underline inline-block">
            Learn more about our Board of Advisors ↗
          </a>
          <div>
            <a href="#" className="text-white hover:underline inline-block">
              Follow us on our LinkedIn page ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
