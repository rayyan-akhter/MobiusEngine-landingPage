import Logo from "../Assets/LogoBlue.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-12">
        <div className="flex flex-col items-start gap-12">
          {/* Logo Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="MobiusEngine Logo"
                className="w-[46px] h-[46px] object-contain"
              />
              <h1 className="text-[#0649E7] font-semibold text-2xl">
                MobiusEngine
              </h1>
            </div>
            <div className="border-t border-[#E5E7EB] w-full mt-12"></div>
          </div>

          {/* Contact Information */}
          <div className="flex justify-between w-full items-start">
            <div className="flex gap-16">
              {/* Address */}
              <div className="flex flex-col">
                <span className="text-[#0649E7] font-semibold mb-2 underline">
                  Address
                </span>
                <p className="text-[#0649E7] text-base">
                  1875 Mission St Ste 103 #450
                  <br />
                  San Francisco, CA 94103
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <span className="text-[#0649E7] font-semibold mb-2 underline">
                  Email
                </span>
                <a
                  href="mailto:finance@mobiusengine.ai"
                  className="text-[#0649E7] text-base hover:underline"
                >
                  finance@mobiusengine.ai
                </a>
              </div>

              {/* Telephone */}
              <div className="flex flex-col">
                <span className="text-[#0649E7] font-semibold mb-2 underline">
                  Telephone
                </span>
                <a
                  href="tel:650-889-6026"
                  className="text-[#0649E7] text-base hover:underline"
                >
                  650-889-6026
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col">
              <span className="text-[#0649E7] font-semibold mb-2 underline">
                Socials
              </span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center border border-[#0649E7] rounded-full text-[#0649E7] text-sm font-semibold hover:bg-[#0649E7] hover:text-white transition-colors"
                >
                  in
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center border border-[#0649E7] rounded-full text-[#0649E7] text-sm font-semibold hover:bg-[#0649E7] hover:text-white transition-colors"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0649E7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-3 flex justify-between items-center">
          <p className="text-white text-sm">© 2023 Mobiusservices LLC</p>
          <div className="flex gap-8">
            <a href="#" className="text-white text-sm hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-white text-sm hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
