
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingPlans from "@/components/PricingPlans";
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
      <PricingPlans />
      <AboutUs />
    </div>
  );
};

export default Index;
