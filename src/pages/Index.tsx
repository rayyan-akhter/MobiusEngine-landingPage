
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";

const Index = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AboutUs />
    </div>
  );
};

export default Index;
