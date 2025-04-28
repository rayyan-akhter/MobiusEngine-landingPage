
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingPlans from "@/components/PricingPlans";
import AboutUs from "@/components/AboutUs";
import ResumeBuilding from "@/components/ResumeBuilding";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="hero-gradient">
        <Navbar />
        <Hero />
      </div>
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlans />
      <ResumeBuilding />
      <Footer />
    </div>
  );
};

export default Index;
