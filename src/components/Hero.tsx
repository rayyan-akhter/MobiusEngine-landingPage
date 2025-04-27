
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
      <div className="lg:w-1/2 mb-12 lg:mb-0">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Land job interviews
          <span className="block text-white">
            <span className="text-[#60A5FA]">10x</span> faster
          </span>
        </h1>
        <p className="text-white/90 text-lg mb-8 max-w-lg">
          Custom-built resumes that match your goals, keywords, and recruiter expectations.
        </p>
        <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-white/90">
          Get Started →
        </Button>
      </div>
      <div className="lg:w-1/2 relative">
        <img 
          src="/placeholder.svg" 
          alt="2024/2025 Hiring Trends"
          className="w-full max-w-md mx-auto"
        />
        <div className="absolute bottom-4 right-4 text-sm text-white/90">
          Download Free E-Book
        </div>
      </div>
    </div>
  );
};

export default Hero;
