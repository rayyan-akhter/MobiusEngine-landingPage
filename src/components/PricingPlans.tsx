import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "April Promo",
    price: "35",
    features: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
      "Need more? Add extra apps for just $1.5 each",
      "Your own dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ],
  },
  {
    name: "Starter",
    price: "50",
    popular: true,
    features: [
      "All the perks of the Promo Plan, plus:",
      "Resume review & story-focused feedback",
      "Dedicated search specialist",
      "Up to 50 job apps/week",
      "Extra apps at $1.5 each",
      "Analyst support within 6 hours (SLA/PST hours)",
    ],
  },
  {
    name: "Plus",
    price: "100",
    features: [
      "Everything in Starter, with more muscle:",
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours",
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

const PricingPlans = () => {
  return (
    <div className="bg-[#FEFEFE] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0649E7] mb-12">
          Job Application Service Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-[24px] border border-[#0649E7] p-8 relative bg-white hover:shadow-lg transition-shadow"
            >
              {plan.popular && (
                <Badge className="absolute top-8 right-8 bg-[#EBF1FF] text-[#0649E7] border-[#0649E7] rounded-full px-4 py-1 text-xs font-medium">
                  Popular
                </Badge>
              )}
              <h3 className="text-xl font-semibold text-[#0649E7] mb-4">
                {plan.name}
              </h3>
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#0649E7]">
                  ${plan.price}
                </span>
                <span className="text-[#0649E7] ml-1">/week</span>
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
                Get Started →
              </Button>
            </div>
          ))}
        </div>

        {/* Advance Plan */}
        <div className="rounded-[24px] bg-[#0649E7] p-8 text-white">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h3 className="text-3xl font-semibold mb-1">{advance.name}</h3>
              <p className="text-white/90 text-base">{advance.description}</p>
            </div>
            <div className="flex items-baseline gap-1 mt-4 lg:mt-0">
              <span className="text-4xl font-bold">${advance.price}</span>
              <span className="text-white/90 ml-1">/week</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {advance.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 flex-shrink-0 bg-[#22C55E] p-1 text-white rounded-full" />
                <span className="text-white/90 text-[15px] leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button className="bg-white text-[#0649E7] hover:bg-[#EBF1FF] rounded-full h-12 px-8 text-base font-medium">
              Get Started →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
