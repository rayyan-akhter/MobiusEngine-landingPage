
import { Button } from "@/components/ui/button";
import Image from "../Assets/HeroImage.png"
import book from "../Assets/book.png"

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
      <div className="lg:w-1/2 mb-12 lg:mb-0 px-10">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#FEFEFE] mb-6">
          Land job interviews
          <span className="block text-[#FEFEFE]">
            <span className="text-[#0649E7]">10x</span> faster
          </span>
        </h1>
        <p className="text-[#FEFEFE]/90 text-lg mb-8 max-w-lg">
          Custom-built resumes that match your goals, keywords, and recruiter expectations.
        </p>
        <Button variant="secondary" size="lg" className="bg-[#FEFEFE] rounded-[2.116rem] px-12 text-[#0649E7] hover:bg-[#EBF1FF]">
          Get Started →
        </Button>
      </div>
      <div className="lg:w-1/2 relative">
        <img 
          src={Image} 
          alt="2024/2025 Hiring Trends"
          className="w-[18.813rem] h-[24.375rem] max-w-md mx-auto"
        />
        <img 
          src={book} 
          alt="2024/2025 Hiring Trends"
          className="absolute right-32 -bottom-5 border rounded-full p-4 backdrop-blur-sm bg-white/30"
        />
        <div className="absolute -bottom-10 right-60 text-sm text-[#FEFEFE]/90">
          Download Free E-Book
        </div>
      </div>
    </div>
  );
};

export default Hero;
