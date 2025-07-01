import Image from "next/image";

export const AppLogo = () => (
  <div className="flex gap-2 text-white my-6">
    <Image
      src="/icons/apple.svg"
      alt="Apple Store Icon"
      width={140}
      height={140}
      className="cursor-pointer"
    />
    <Image
      src="/icons/google.png"
      alt="Apple Store Icon"
      width={140}
      height={140}
      className="cursor-pointer"
    />
  </div>
);
