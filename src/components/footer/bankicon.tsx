import GooglePaySmall from "../../icons/googlepaysmall";
import Maestro from "../../icons/maestro";
import Master2 from "../../icons/master2";
import PaypalSmall from "../../icons/paypalsmall";
import Stripe from "../../icons/stripe";
import VisaWhite from "../../icons/visawhite";

const BankIcon = () => {
  return (
    <div className="flex items-center space-x-3">
      <BankWrapper>
        <Maestro />
      </BankWrapper>
      <BankWrapper>
        <Master2 />
      </BankWrapper>
      <BankWrapper>
        <VisaWhite />
      </BankWrapper>
      <BankWrapper>
        <Stripe />
      </BankWrapper>
      <BankWrapper>
        <PaypalSmall />
      </BankWrapper>
      <BankWrapper>
        <GooglePaySmall />
      </BankWrapper>
    </div>
  );
};

const BankWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#051C16] rounded-md w-[34px] h-[24px] cursor-pointer flex justify-center items-center">
      {children}
    </div>
  );
};

export default BankIcon;