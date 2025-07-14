import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Frecciarossa from "@/icons/Frecciarossa";
import Ouigo from "@/icons/ouigo";
import Tsv from "@/icons/tsv";
import { Separator } from "@radix-ui/react-separator";
import { ArrowRight, Cable, Calendar, Heart, Wifi, Wine } from "lucide-react";
import { useState } from "react";
import { invoicesData } from "./data";

export function TableDemo() {
  const [selectedPrice, setSelectedPrice] = useState<{
    invoice: string;
    type: "total" | "firstClass";
  } | null>(null);
  const [favoritedInvoices, setFavoritedInvoices] = useState<string[]>([]);
  const toggleFavorite = (invoiceId: string) => {
    setFavoritedInvoices((prev) =>
      prev.includes(invoiceId)
        ? prev.filter((id) => id !== invoiceId)
        : [...prev, invoiceId]
    );
  };

  return (
    <Table className="mt-6 w-full overflow-clip">
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[100px] inline-flex gap-2 justify-center items-center">
            <Calendar /> Thu. Jul . 10 , 2025
          </TableHead>
          <TableHead className="invisible absolute lg:relative">Logo</TableHead>
          <TableHead>Standard</TableHead>
          <TableHead className="text-right hidden md:block">
            1st Class
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoicesData.map((invoice) => {
          const isPriceSelected = selectedPrice?.invoice === invoice.invoice;

          return (
            <TableRow
              key={invoice.invoice}
              className={`relative border-3 ${
                isPriceSelected ? "border-blue-900" : "border-b"
              }`}
            >
              {/* Time and features cell */}
              <TableCell className="py-6 font-medium">
                <div className="flex items-center gap-2">
                  <h6 className="font-normal">6:04am</h6>
                  <ArrowRight />
                  <h6 className="font-normal">6:04am</h6>
                </div>
                <div className="mt-2">
                  2h 11m,{" "}
                  <span className="underline underline-offset-2">
                    0 changes
                  </span>
                </div>
                <div className="mt-2">
                  <div className="social inline-flex justify-center items-center gap-4 mt-4">
                    <div
                      className="relative p-1 group"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent row click
                        toggleFavorite(invoice.invoice);
                      }}
                    >
                      <Heart
                        className={`size-5 cursor-pointer stroke-2 transition-all duration-200 ${
                          favoritedInvoices.includes(invoice.invoice)
                            ? "fill-red-500 stroke-red-500"
                            : "fill-transparent stroke-gray-400"
                        }`}
                      />
                      <div className="absolute inset-0 size-full bg-gray-200 rounded-full -z-10 scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <Separator
                      orientation="vertical"
                      className="bg-accent h-4 w-0.5"
                    />
                    <Wifi className="text-accent size-4" />
                    <Cable className="text-accent size-4" />
                    <Wine className="text-accent size-4" />
                  </div>
                </div>
              </TableCell>

              {/* Logo icon */}
              <TableCell className="hidden lg:inline-block py-6 align-top">
                {invoice.icon}
              </TableCell>

              {/* Standard price */}
              <TableCell className="py-6 align-top relative">
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPrice({
                      invoice: invoice.invoice,
                      type: "total",
                    });
                  }}
                  className={`p-1 md:p-2 inline-block cursor-pointer ${
                    selectedPrice?.invoice === invoice.invoice &&
                    selectedPrice?.type === "total"
                      ? "bg-blue-900 text-white"
                      : ""
                  }`}
                >
                  {invoice.totalAmount}
                </span>
                {/* first class price for mobile visible */}
                <span
                  className={`md:hidden flex justify-center items-center w-fit p-1  ${
                    selectedPrice?.invoice === invoice.invoice &&
                    selectedPrice?.type === "firstClass"
                      ? "bg-blue-900 text-white"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPrice({
                      invoice: invoice.invoice,
                      type: "firstClass",
                    });
                  }}
                >
                  1st {invoice.firstClass}
                </span>
                {!invoice.totalAmount && !invoice.firstClass && (
                  <div className="md:absolute p-2  md:right-0 md:translate-x-1/2">
                    Not available
                  </div>
                )}

                <div className="absolute bottom-8 left-2 md:hidden">{invoice?.icon}</div>
              </TableCell>

              {/* First class price */}
              <TableCell className="py-6 text-right align-top invisible absolute md:visible md:relative">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPrice({
                      invoice: invoice.invoice,
                      type: "firstClass",
                    });
                  }}
                  className={`inline-block p-2 cursor-pointer ${
                    selectedPrice?.invoice === invoice.invoice &&
                    selectedPrice?.type === "firstClass"
                      ? "bg-blue-900 text-white"
                      : ""
                  }`}
                >
                  <div>{invoice.firstClass}</div>
                  {invoice.firstClassSeatLeft !== 0 && (
                    <h6 className="text-yellow-400 text-sm">
                      Only {invoice.firstClassSeatLeft} left
                    </h6>
                  )}
                </div>
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow className="invisible opacity-0 pointer-events-none">
          <TableCell>x</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
