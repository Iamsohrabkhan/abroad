import React from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";

type Trip = {
  id: number;
  imageUrl: string;
  from: string;
  to: string;
};

const trips: Trip[] = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1624510666979-0f5f1b8777d7?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.1.0",
    from: "Paris",
    to: "Nice",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0",
    from: "Lyon",
    to: "Marseille",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.1.0",
    from: "Toulouse",
    to: "Bordeaux",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    from: "Strasbourg",
    to: "Dijon",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1612278675615-7b093b07772d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0",
    from: "Grenoble",
    to: "Avignon",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    from: "Nantes",
    to: "Rennes",
  },
];


const PopularTrips: React.FC = () => {
  return (
    <section className="">
      <h2 className="text-center mb-12">Popular Trips in France</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {trips.map((trip) => (
          <div key={trip.id} className="relative aspect-video rounded-md">
            <Image
              src={trip.imageUrl}
              alt={`${trip.from} to ${trip.to}`}
              className="object-center object-cover rounded-md"
              fill
            />
            <h6 className="absolute left-2 bottom-2 text-white inline-flex justify-center items-center gap-2">
              {trip.from} <MoveRight /> {trip.to}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularTrips;
