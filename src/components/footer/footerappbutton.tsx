export const AppButton = () => (
  <div className="lg:col-span-1 ">
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 ">
      {/* QR Code */}
      <img src="/qr.png" className="h-28 object-center object-cover" alt="qr" />
      <div className="h-28  flex flex-col space-y-2">
        <img
          src="/icons/apple.svg"
          alt="Apple Store Icon"
          className="cursor-pointer h-1/2 w-full object-center -translate-x-2 "
        />
        <img
          src="/icons/google.png"
          alt="Apple Store Icon"
          className="cursor-pointer h-1/2  w-full object-center"
        />
      </div>
    </div>
  </div>
);
