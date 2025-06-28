import AmericanExpress from "../../icons/Americanexpress";
import Applepay from "../../icons/applepay";
import GooglePlay from "../../icons/googlepay";
import Master from "../../icons/Master";
import Paypal from "../../icons/paypal";
import Paywithoutfee from "../../icons/paywithoutfee";
import SecureCheckout from "../../icons/secureCheckout";
import Visa from "../../icons/visa";


const Sponsored = () => {
  return (
    <section className="">
      <div className="w-full h-[0.1px] bg-[rgb(208,212,213)]" />
      <div className="w-full py-12">
        <div className="w-full">
          <div className="flex justify-center items-center gap-4 md:hidden">
            <SecureCheckout />
            <Paywithoutfee />
          </div>
          <div className="inline-flex w-full items-center justify-between mt-6  gap-2">
            <SecureCheckout className="hidden md:inline-block" />
            <Visa />
            <Master />
            <AmericanExpress />
            <GooglePlay />
            <Applepay />
            <Paypal />
            <Paywithoutfee className="hidden md:inline-block" />
          </div>
        </div>
      </div>
      <div className="w-full h-[0.1px] bg-[rgb(208,212,213)]" />
    </section>
  );
};

export default Sponsored;
