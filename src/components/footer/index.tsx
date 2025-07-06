import Image from "next/image";
import { AppButton } from "./footerappbutton";
import BankIcon from "./bankicon";
import SocialLink from "./sociallink";
import FooterLinks from "./footerLinks";
import { FooterLogo } from "./footerLogo";
import ArrowUp from "@/icons/arrowUp";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mt-24">
      {/* Footer */}
      <footer className="relative text-white">
        <ArrowUp
          className="absolute right-2 top-3.5 cursor-pointer -translate-y-1/2 h-24"
          onClick={scrollToTop}
        />
        <Image
          src="/footer.jpg"
          fill
          alt="footer image"
          className="object-center object-cover -z-10"
        />
        <Image
          src="/noise.png"
          fill
          alt="footer image"
          className="object-center object-cover -z-[9] opacity-20"
        />
        <div className="size-full absolute inset-0 bg-[#2c2c2c9a]  backdrop-blur-lg -z-[8] " />
        <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <FooterLogo />
            <div className="lg:col-span-2">
              <FooterLinks />
            </div>
            <AppButton />
          </div>
          <div className="border-t border-gray-600 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <SocialLink />
              <div className="text-gray-400 text-sm text-center lg:text-left">
                © 2026 Abord Inc.
              </div>
              <BankIcon />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
