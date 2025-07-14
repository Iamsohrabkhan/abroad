import { ChevronDown, ChevronDownSquareIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export const TicketCondition = () => {
  const [active, setActive] = useState(false);
  return (
    <div className=" mt-6">
      <div
        onClick={() => {
          setActive(!active);
        }}
      >
        <h3 className="text-lg font-bold">Ticket Conditions</h3>
        <div className="mt-3 p-4 border border-[#d3d3d3] flex justify-between cursor-pointer"
        style={{
            borderRadius: active ? "0.5rem 0.5rem 0 0" : "0.5rem"
        }}
        >
          <div>
            <h5>1 x adult</h5>
            <p className="text-sm">Serenità</p>
            <button className="inline-flex justify-center items-center gap-1 mt-6 cursor-pointer">
              <ChevronDown
                className={`transition-transform duration-300 ${
                  active ? "rotate-180" : "rotate-0"
                }`}
              />{" "}
              View exchange and return
            </button>
          </div>
          <h5>$55.00</h5>
        </div>
      </div>

      <motion.div
        animate={{
          height: active ? "auto" : 0,
          border: active ? "0.05px solid #d3d3d3" : "none",
          borderTop: active ? "0px solid transparent" : "none",
          transition: {
            duration: 0.2,
          },
        }}
        className="overflow-clip"
        style={{
            borderRadius: active ? "0 0 0.5rem 0.5rem" : "0.5rem"
        }}
      >
        <div className="p-4">
          <h5>Serenità</h5>
          <p className="text-sm">
            Échange gratuit et illimité avant le départ. Remboursement possible
            jusqu’au départ avec une retenue de 20 % si le prix du billet est
            supérieur à 10 € (par passager).
          </p>
        </div>
      </motion.div>
    </div>
  );
};
