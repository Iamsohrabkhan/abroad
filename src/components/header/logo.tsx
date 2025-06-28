import Image from "next/image";

const Logo = () => {
  return (
       <div className="logo">
          <Image width={70} height={38}  src="/logo-light.svg" alt="logo" className="object-contain md:hidden"/>
          <Image width={140} height={38}  src="/logo-light.svg" alt="logo" className="object-contain hidden md:inline-block"/>
        </div>
  );
}
export default Logo;