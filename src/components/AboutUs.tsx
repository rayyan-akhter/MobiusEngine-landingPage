
import { Linkedin } from "lucide-react";
import Image1 from "../Assets/AboutUs1.png"
import Image2 from "../Assets/AboutUs2.png"

const teamMembers = [
  {
    name: "Ashwin",
    image: Image1,
    description: "is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.",
    vision: "Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams."
  },
  {
    name: "Nicole",
    image: Image2,
    description: "is an Executive coach at Mobius specializing in resume builds and career advisory.",
    additionalInfo: "With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential."
  }
];

const AboutUs = () => {
  return (
    <div className="about-us-gradient py-16 lg:py-24 ">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#FEFEFE] mb-16">
          About Us
        </h2>
        
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="flex flex-col lg:flex-row items-start gap-8">
              <div className="relative">
                <div className="w-44 h-44 rounded-full overflow-hidden bg-[#FEFEFE] ">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute -bottom-3 right-2 w-14 h-14 flex justify-center items-center border rounded-full p-4 backdrop-blur-sm bg-white/30 font-bold text-white ">in</span>
                </div>
               
              </div>
              
              <div className="text-[#FEFEFE]">
                <p className="text-lg">
                  <strong>{member.name}</strong> {member.description}
                </p>
                {member.vision && (
                  <p className="mt-4 text-[#FEFEFE]/90">{member.vision}</p>
                )}
                {member.additionalInfo && (
                  <p className="mt-4 text-[#FEFEFE]/90">{member.additionalInfo}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-4 text-center">
          <a href="#" className="text-[#FEFEFE] hover:underline inline-block">
            Learn more about our Board of Advisors ↗
          </a>
          <div>
            <a href="#" className="text-[#FEFEFE] hover:underline inline-block">
              Follow us on our LinkedIn page ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
