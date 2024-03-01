import Image from "next/image";
import { Roboto } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo_black.svg"
        alt="Journa"
        width={40}
        height={40}
        layout="fixed"
      />
      <span className={cn(font.className, "text-base font-bold")}>Journa</span>
    </div>
  );
};
