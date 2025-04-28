import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Holly",
    role: "senior executive",
    achievement: "who got over 10 job interviews and an offer she accepted",
  },
  {
    name: "Holly",
    role: "senior executive",
    achievement: "who got over 10 job interviews and an offer she accepted",
  },
  {
    name: "Holly",
    role: "senior executive",
    achievement: "who got over 10 job interviews and an offer she accepted",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#FEFEFE] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0649E7] text-left mb-16">
          What our clients have to say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl border-2 border-[#0649E7] overflow-hidden"
            >
              <div className="aspect-video bg-[#EBF1FF]  rounded-2xl border-[#0649E7] relative">
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#0649E7] rounded-full p-4">
                    <Play className="w-6 h-6 text-[#FEFEFE]" />
                  </div>
                </button>
              </div>
              <div className="p-6 bg-[#0649E7] text-[#FEFEFE]">
                <p className="text-sm">
                  {testimonial.name} is a {testimonial.role}{" "}
                  {testimonial.achievement}
                </p>
                <button className="mt-4 ml-auto bg-white rounded-full w-14 h-14 flex justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#0649E7]"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            variant="outline"
            className="text-[#0649E7] border-2 border-[#0649E7] rounded-[36px]"
          >
            More customer testimonials →
          </Button>
          <Button className="bg-[#0649E7] text-[#FEFEFE] hover:bg-[#022183] rounded-[36px]">
            Get Started →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
