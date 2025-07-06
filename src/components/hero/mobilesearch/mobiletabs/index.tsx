
import { Bus, HeartHandshake, PackageOpen } from "lucide-react";
import { motion } from "motion/react";

const Tabs = [
  {
    icon: <Bus className="size-5" />,
    label: "Travel",
  },
  {
    icon: <PackageOpen className="size-5" />,
    label: "Ship Parcels",
  },
  {
    icon: <HeartHandshake className="size-5" />,
    label: "Rent Buses",
  },
];

const MobileSearchTabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (index: number) => void;
}) => {
  return (
    <ul className="shrink-0 grow-0 basis-full w-full max-w-72 mx-auto flex justify-start gap-2 relative">
      <div className="scrollbar left-0 right-0 -bottom-2 absolute bg-accent h-1 w-full rounded-full mx-auto" />
      {Tabs.map((tab, index) => (
        <li
          key={index}
          onClick={() => setActiveTab(index)}
          className="relative flex justify-center items-center gap-1 basis-full cursor-pointer"
        >
          <div
            className={`border-2 aspect-square size-8 rounded-full flex justify-center items-center bg-white transition-all duration-300 [&>svg]:size-3 ${
              activeTab === index
                ? "border-[#279678] [&>svg]:stroke-[#279678]"
                : "border-[#EAECF0] outline-[#EAECF0] [&>svg]:stroke-[#667085]"
            }`}
          >
            {tab.icon}
          </div>
          <div className="text-xs md:text-sm">{tab.label}</div>
          {activeTab === index && (
            <motion.span
              layoutId="mobile-tab-pill"
              style={{ borderRadius: 999 }}
              className="pill block absolute -bottom-2 left-0 right-0 h-1 bg-[#279678]"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export {MobileSearchTabs}
