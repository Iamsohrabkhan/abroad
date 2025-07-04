"use client";

import { AppProvider } from "@/components/store/AppContext";
import { MotionConfig } from "motion/react";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0]?.type;

    if (navType === "reload") {
      // This means the page was refreshed (F5 or Ctrl+R)
      console.log("Page was refreshed!");
      // Do your logic here
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <AppProvider>
      <MotionConfig transition={{ layout: { duration: 0.6, ease: "circOut" } }}>
        <div>{children}</div>
      </MotionConfig>
    </AppProvider>
  );
}
