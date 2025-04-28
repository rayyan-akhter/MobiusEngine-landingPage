import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "../Assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between  items-center">
        <div className="flex items-center">
          <img src={Logo} alt="MobiusEngine" className="h-8" />
          <span className="ml-2 text-[#FEFEFE] font-semibold text-xl">
            MobiusEngine
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About Us
          </a>
          <a href="#" className="nav-link">
            Plans
          </a>
          <a href="#" className="nav-link">
            Testimonials
          </a>
          <a href="#" className="nav-link">
            Privacy Policy
          </a>
          <div className="relative group">
            <button className="nav-link flex items-center">
              More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        <Button
          variant="secondary"
          className="bg-[#FEFEFE] px-12 text-[#022183] font-medium rounded-[1.969rem] hover:bg-[#EBF1FF]"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
