import AppStore from "./appstore";
import PlayStore from "./playstore";

export const AppButton = () => (
  <div className="lg:col-span-1">
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 ">
      {/* QR Code */}
      <img src="/qr.png" className="h-28 object-center object-cover" alt="qr" />
      <div className="h-28  flex flex-col lg:space-y-2  -mt-4 lg:mt-0">
        <AppStore className="h-24 w-28 lg:h-28 lg:w-full" />
        <PlayStore className="h-24 w-28 lg:h-28  lg:w-full -mt-4 lg:mt-0" />
      </div>
    </div>
  </div>
);
