
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
      "Personalized with up to 10 filters & 5 job titles"
    ]
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
      "Analyst support within 6 hours (SLA/PST hours)"
    ]
  },
  {
    name: "Plus",
    price: "100",
    features: [
      "Everything in Starter, with more muscle:",
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours"
    ]
  }
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
    "Access to senior resume experts, Founder & Exec Coaches"
  ]
};

const PricingPlans = () => {
  return (
    <div className="bg-[#FEFEFE] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0649E7] text-center mb-16">
          Job Application Service Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border-2 border-[#0649E7] p-8 relative"
            >
              {plan.popular && (
                <Badge
                  className="absolute top-4 right-4 bg-[#EBF1FF] text-[#0649E7] border-[#0649E7]"
                >
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
                <span className="text-[#101010]/80">/week</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0649E7] mt-1 flex-shrink-0" />
                    <span className="text-[#101010]/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-[#0649E7] text-[#FEFEFE] hover:bg-[#022183]"
              >
                Get Started →
              </Button>
            </div>
          ))}
        </div>

        {/* Advance Plan */}
        <div className="rounded-2xl bg-[#0649E7] p-8 text-[#FEFEFE]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{advance.name}</h3>
              <p className="text-[#FEFEFE]/90">{advance.description}</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">${advance.price}</span>
              <span className="text-[#FEFEFE]/90">/week</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8">
            {advance.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#FEFEFE] mt-1 flex-shrink-0" />
                <span className="text-[#FEFEFE]/90">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              className="bg-[#FEFEFE] text-[#0649E7] hover:bg-[#EBF1FF]"
            >
              Get Started →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
