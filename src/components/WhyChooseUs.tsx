
import { Heart, Star } from "lucide-react";

const features = [
  {
    icon: <Heart className="w-8 h-8 text-[#0649E7]" />,
    title: "Tried, Tested, Trusted",
    description: "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back."
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0649E7]">
      <circle cx="12" cy="8" r="5"/>
      <path d="M20 21a8 8 0 0 0-16 0"/>
    </svg>,
    title: "Real People, Real Help",
    description: "A hands-on team that actually cares — guiding you through every twist in your career path."
  },
  {
    icon: <Star className="w-8 h-8 text-[#0649E7]" />,
    title: "Beat the Line",
    description: "We search, shortlist, and apply for you, so your name shows up first — every single day."
  }
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#EBF1FF] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0649E7] text-center mb-16">
          Why Choose Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#FEFEFE] rounded-2xl p-8">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#101010] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#101010]/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
