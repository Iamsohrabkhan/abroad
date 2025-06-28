const MarqueLi = () => {
  const airlines = [
    { id: 1, name: "Air India", img: "marquee-images/indigo-Airlines.png" },
    { id: 2, name: "Air India", img: "marquee-images/indigo-Airlines.png" },
    { id: 3, name: "Air India", img: "marquee-images/SpiceJet-Airlines.png" },
    { id: 4, name: "Air India", img: "marquee-images/SpiceJet-Airlines.png" },
    { id: 5, name: "Air India", img: "marquee-images/Vistara-Airlines.png" },
    { id: 6, name: "Air India", img: "marquee-images/Vistara-Airlines.png" },
    { id: 7, name: "Air India", img: "marquee-images/indigo-Airlines.png" },
    { id: 8, name: "Air India", img: "marquee-images/indigo-Airlines.png" },
  ];

  return (
    <>
      {airlines.map((airline) => (
        <li
          key={airline.id}
          className="flex justify-center items-center flex-col w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-64"
        >
          <img
            className="size-[100px] object-center object-cover"
            src={airline.img}
            alt={airline.name}
          />
          <h6>{airline.name}</h6>
        </li>
      ))}
    </>
  );
};

export default MarqueLi;
