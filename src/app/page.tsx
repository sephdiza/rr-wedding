"use client";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden text-white">
      <Navbar />

      <Hero />

      <div className="min-h-44 text-black" id="parents">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque
        distinctio repellat neque facere. Dolor impedit, commodi alias nesciunt
        qui quod quis explicabo facere numquam magnam, sunt iure nisi
        consequuntur?
      </div>
    </main>
  );
}
