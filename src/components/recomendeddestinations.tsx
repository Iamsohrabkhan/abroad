import Image from "next/image";
const destinations = [
  {
    img: "https://images.unsplash.com/photo-1617339860069-3d9fe67bdd87?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Top Travel Picks",
  },
  {
    img: "https://images.unsplash.com/photo-1700822148662-1d172e99486e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Discover Your Next Destination",
  },
  {
    img: "https://images.unsplash.com/photo-1730139097641-6b454e67cca9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Wanderlust Worthy Spots",
  },
  {
    img: "https://images.unsplash.com/photo-1665324371039-64247ca15731?q=80&w=865&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Curated Destinations",
  },
  {
    img: "https://images.unsplash.com/photo-1621671222605-54f4baf42f81?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Luxury Escapes",
  },
  {
    img: "https://images.unsplash.com/photo-1643930530727-63272194c9cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Plan Your Next Trip",
  },
  {
    img: "https://images.unsplash.com/photo-1634739788045-5591c5987398?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Where to Go Next",
  },
  {
    img: "https://images.unsplash.com/photo-1518790946172-be31b801e0b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Pack Your Bags For These!",
  },
];

const RecomendedDestinations = () => {
  return (
    <section>
      <h2 className="text-center mb-12">Recommended Destinations</h2>
      <div className="xl:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="shadow-xs bg-slate-100 rounded-md">
            <div className="relative w-full aspect-video">
              <Image
                className="object-cover object-center rounded-md"
                src={destination.img}
                alt={destination.heading}
                fill
              />
            </div>
            <h6 className="text-center py-3">{destination.heading}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecomendedDestinations;
