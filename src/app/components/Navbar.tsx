// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  "Date & Venue",
  "Our Story",
  "Entourage",
  "Principal Sponsors",
  "Attire",
  "Gift Guide",
  "Seats",
  "FAQs",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-10 flex h-14 w-full items-center justify-between bg-black bg-opacity-40 px-5 md:px-20">
      <a className="text-lg" href="#parents">
        R | R
      </a>

      <Sheet>
        <SheetTrigger asChild>
          <button className="">
            <HamburgerMenuIcon width="24" height="24" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="h-screen bg-black text-slate-300 opacity-65"
        >
          <SheetHeader>
            <SheetTitle className="text-slate-300">R | R</SheetTitle>
            <SheetDescription>2024</SheetDescription>
          </SheetHeader>
          <div className="grid gap-8 py-12 pb-10">
            {links.map((link) => (
              <Link
                key={link}
                href="#"
                className="grid items-center text-center"
              >
                <span className="text-2xl">{link}</span>
              </Link>
            ))}
            <Button variant="outline" className="mt-5 h-16 bg-black">
              <span className="text-2xl">RSVP Now</span>
            </Button>
          </div>
          {/* <SheetFooter>
            <SheetClose asChild>
              <button type="submit">RSVP Now</button>
            </SheetClose>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </nav>
  );
}
