import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="flex w-full p-6 items-center h-16 bg-background">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost">Links</Button>
        <Button variant="ghost">About</Button>
      </div>
    </footer>
  );
};
