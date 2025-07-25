import Card from "./card";
"lucide-react";

const Cards = () => {
  return (
    <div className="cards grid grid-cols-2  rounded-md gap-4">
      <Card
        icon={<Truck />}
        title="Trips driven"
        number={64}
        className=" bg-mint-light "
        paragraph="Bus is your most used mode of transportation"
      />
      <Card
        title="Your longest trip"
        number={210}
        numberSub="Km"
        className="relative before:content-['_'] before:absolute before:inset-0 before:-z-10 before:opacity-50 before:bg-[url('/CIV.png')] before:size-full before:bg-cover before:bg-center before:rounded-md "
        numberClassName="text-7xl"
         paragraph="Only 230km to go"
      />
      <Card
      
        title="Co2 saved"
        number={50}
        numberSub="KG"
        className="bg-[#DEFFF7]"
        numberClassName="text-7xl"
        paragraph="Approximately 240L of fuel consumption."
      />
      <Card
        title="52 hours"
        paragraph="Is your most traveled route."
        ArrowButton={true}
        className="shadow-md"

      />
    </div>
  );
};

export default Cards;
const KM = () => {
  return (
    <svg
      width="29"
      height="16"
      viewBox="0 0 29 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15.6476H2.79821V11.26L4.88007 9.02142L9.96162 15.6476H13.409L6.80524 7.05148L12.9613 0.268628H9.53629L2.79821 7.79021V0.268628H0V15.6476Z"
        fill="#1A1528"
      />
      <path
        d="M22.0397 9.46913H25.8677V12.2673C24.9051 12.9613 23.6515 13.3642 22.4874 13.3642C19.6221 13.3642 17.2044 10.9018 17.2044 7.94691C17.2044 5.01439 19.6221 2.55196 22.4874 2.55196C23.9873 2.55196 25.6438 3.22354 26.6064 4.34282L28.5987 2.48481C27.1213 0.940199 24.726 0 22.4874 0C18.0775 0 14.3615 3.62648 14.3615 7.94691C14.3615 12.2673 18.0775 15.9162 22.4874 15.9162C24.726 15.9162 27.1213 14.9536 28.5987 13.409V7.1858H22.0397V9.46913Z"
        fill="#1A1528"
      />
    </svg>
  );
};

const Truck = () => {
  return (
    <svg
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.6915 50.4654V59.8855C23.6915 61.3412 25.5286 64.1624 26.8323 64.8099M23.6915 50.4654H47.9156M23.6915 50.4654V28.0746V23.0007M72.1396 50.4654V59.8855C72.1396 61.3412 70.3027 64.1624 68.999 64.8099M72.1396 50.4654H47.9156M72.1396 50.4654V28.0746V23.0007M26.8323 64.8099V72.6577C26.8323 72.7718 26.8713 72.8824 26.9429 72.9713L28.5989 75.0274C28.6938 75.1452 28.837 75.2137 28.9883 75.2137H32.5539C32.7103 75.2137 32.8576 75.1406 32.9522 75.0161L34.5071 72.968C34.5731 72.8811 34.6089 72.7749 34.6089 72.6657V64.8099M26.8323 64.8099H34.6089M34.6089 64.8099H61.2222M68.999 64.8099H61.2222M68.999 64.8099V72.6577C68.999 72.7718 68.96 72.8824 68.8884 72.9713L67.2324 75.0274C67.1375 75.1452 66.9943 75.2137 66.843 75.2137H63.277C63.1206 75.2137 62.9733 75.1406 62.8788 75.0161L61.324 72.968C61.258 72.8811 61.2222 72.7749 61.2222 72.6657V64.8099M47.9156 15.334H67.0822C70.9156 15.334 72.1396 15.334 72.1396 19.1673V23.0007M47.9156 15.334H28.7489C24.9156 15.334 23.6915 15.334 23.6915 19.1673V23.0007M47.9156 15.334V50.4654M32.5831 57.5008H40.2498M55.5831 57.5008H63.2498M23.6915 23.0007L15.334 28.0746V33.8246M72.1396 23.0007L80.499 28.0746V33.8246"
        stroke="#1A1528"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
