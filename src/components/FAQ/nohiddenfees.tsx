import Greentick from "../../icons/greentick";

export function NoHiddenFees() {
    return (
         <div className="max-w-md ">
        <h2>No hidden costs.</h2>
        <h2 className="text-green-400">No surprises. Never!</h2>
        <ul className="space-y-6 mt-6">
          <li className="inline-flex justify-center items-center gap-4">
            <span>
              <Greentick />
            </span>
            <span>
              Compare prices from over 270 companies and book the right solution
              for you.
            </span>
          </li>
          <li className="inline-flex justify-center items-center gap-4">
            <span>
              <Greentick />
            </span>
            <span>
              Book your tickets in US Dollars and pay securely with Apple Pay,
              PayPal, and more
            </span>
          </li>
          <li className="inline-flex justify-center items-center gap-4">
            <span>
              <Greentick />
            </span>
            <span>
              Questions? Contact our English speaking Customer Support via
              e-mail or phone.
            </span>
          </li>
        </ul>
      </div>
    );
}