import { ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";

const ResumeBuilding = () => {
  const ResumeBuildings = [
    {
      name: "Resume Rebuild",
      price: "1000",
      description:
        "Crafted for senior to VP-level professionals ready for their next big step.",
      features: [
        "3× 30-min coaching",
        "Focused on storytelling, not just formatting",
        "Analyst + full application team on Pacific hours",
        "Tailored to your target industry, company, or role",
        "Direct work with our co-founder (ex-Google, JP Morgan)",
        "Executive coaching from UC Berkeley alum with 10+ yrs experience",
        "Resume Rebuild portfolio available upon request",
      ],
    },
    {
      name: "Interview Prep",
      price: "500",
      description:
        "Two sessions to sharpen your story, confidence, and clarity — fast.",
      features: [
        "2× 45-min live coaching with our co-founder",
        "Real-time, practical feedback",
        "Build clarity, empathy & executive presence",
        "For senior and leadership roles — technical & non-technical",
      ],
    },
  ];

  const advance = {
    name: "Advance",
    price: "150",
    description: "Top-tier support for serious job hunters:",
    features: [
      "Everything in Plus",
      "Custom Resumes & Cover Letters",
      "20 fully customized applications/week",
      "Help with complex job searches",
      "Access to senior resume experts, Founder & Exec Coaches",
    ],
  };
  return (
    <div className="bg-[#FEFEFE] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0649E7] text-left">
          Resume Building & Coaching
        </h2>
        <p className="text-[#0649E7] mt-2 text-lg">
          Let's talk about where you're headed — and how your resume can get you
          there.
          <br />
          <span className="font-semibold">Schedule a call to get started.</span>
        </p>

        <div className="flex flex-wrap justify-center mt-16 gap-8 mb-24">
          {ResumeBuildings.map((plan) => (
            <div
              key={plan.name}
              className="rounded-[24px] border border-[#0649E7] p-8 relative w-[450px] hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#0649E7] mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#0649E7]">
                  ${plan.price}
                </span>
                <span className="text-[#0649E7] font-semibold ml-2">one time</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0 bg-[#22C55E] p-1 text-white rounded-full" />
                    <span className="text-[#0649E7] text-[15px] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#0649E7] text-[#FEFEFE] hover:bg-[#0538c0] rounded-full h-12 text-base font-medium">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] flex justify-between items-center bg-[#0649E7] p-12 text-[#FEFEFE] cursor-pointer hover:bg-[#0538c0] transition-colors">
          <h2 className="text-4xl font-bold">
            STILL HAVE
            <br />
            DOUBTS?
          </h2>
          <h2 className="text-6xl font-semibold">Contact us</h2>
          <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center">
            <ArrowRight size={36} color="#0649E7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilding;
