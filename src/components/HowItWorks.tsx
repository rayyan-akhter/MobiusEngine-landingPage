const steps = [
  {
    number: 1,
    title: "Submit Intake Form",
  },
  {
    number: 2,
    title: "We do the search and curation for list of jobs",
  },
  {
    number: 3,
    title: "You approve, we do the tedious part (applying)",
  },
  {
    number: 4,
    title: "You get the interviews",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#FEFEFE] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0649E7]  mb-16">
          How we work?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="mb-6">
                <div className="circle-number mb-1">{step.number}</div>
                <div className="border border-[#0649E7]" />
              </div>
              <p className="text-[#0649E7] text-lg">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
