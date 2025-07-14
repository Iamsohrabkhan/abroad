import Frecciarossa from "@/icons/Frecciarossa";
import Ouigo from "@/icons/ouigo";
import Tsv from "@/icons/tsv";

 
const invoices = [
  {
    invoice: "INV001",
    icon: <Tsv />,
    totalAmount: "$250.00",
    firstClass: "$300.00",
    firstClassSeatLeft: 0,
  },
  {
    invoice: "INV002",
    icon: <Tsv />,
    totalAmount: "$150.00",
    firstClass: "$300.00",
    firstClassSeatLeft: 2,
  },
  {
    invoice: "INV003",
    icon: <Frecciarossa />,
    totalAmount: "$350.00",
    firstClass: "$300.00",
    firstClassSeatLeft: 0,
  },
  {
    invoice: "INV004",
    icon: <Tsv />,
    totalAmount: "$450.00",
    firstClass: "$600.00",
    firstClassSeatLeft: 0,
  },
  {
    invoice: "INV007",
    icon: <Ouigo />,
    totalAmount: null,
    firstClass: null,
    firstClassSeatLeft: 0,
  },
  {
    invoice: "INV005",
    icon: <Ouigo />,
    totalAmount: "$550.00",
    firstClass: "$666.00",
    firstClassSeatLeft: 4,
  },
  {
    invoice: "INV006",
    icon: <Tsv />,
    totalAmount: "$200.00",
    firstClass: "$300.00",
    firstClassSeatLeft: 0,
  },
];
export const invoicesData = invoices
