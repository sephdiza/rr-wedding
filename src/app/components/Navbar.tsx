// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-10 flex h-14 w-screen items-center justify-between p-5 backdrop-blur-sm">
      <h1 className="text-lg">R | R</h1>
      <button className="">hamburger icon</button>
    </nav>
  );
}
