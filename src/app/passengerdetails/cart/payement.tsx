import Paypal from "@/icons/paypal";
import { Lock } from "lucide-react";

const Payment = () => {
  return (
    <div className="card mt-6 px-6 py-6 shadow outline-accent space-y-6 bg-white rounded-md">
      <div className="flex justify-between items-center">
        <h4 className="">
          Total to pay <Lock className="inline-block" />
        </h4>
        <h5>15.00$</h5>
      </div>
      <p>No Booking fee</p>
      <p className="text-blue-600">Add a discount code</p>
      <p>
        Confirmation will be sent to <br /> 70******@gmail.com{" "}
        <span className="text-blue-600">Add email address</span>
      </p>
      <button className="text-white bg-mint flex justify-center items-center py-3 rounded-md w-full">
        Pay with Card
      </button>
      <button className="text-white bg-yellow-500 flex justify-center items-center py-3 rounded-md w-full">
        Pay with &nbsp;
        <Paypal />
      </button>
    </div>
  );
};
export default Payment;
