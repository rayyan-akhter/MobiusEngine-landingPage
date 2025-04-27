
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="hero-gradient">
        <Navbar />
        <Hero />
      </div>
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <AboutUs />
    </div>
  );
};

export default Index;
