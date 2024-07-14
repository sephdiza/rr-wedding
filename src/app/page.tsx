"use client";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden text-white">
      <Navbar />

      <div className="flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-[url('../../public/herov3.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-screen w-screen flex-col items-center justify-between py-12 backdrop-brightness-[.5]">
          <p className="font-hero pt-20 text-center text-6xl leading-relaxed">
            <span className="block">Ron</span>
            <span className="block">&</span>
            <span className="block">Raineth</span>
          </p>
          <div>
            <p className="text-xl">99D 59H 59M 59S</p>
          </div>
        </div>
      </div>

      <div className="min-h-44 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque
        distinctio repellat neque facere. Dolor impedit, commodi alias nesciunt
        qui quod quis explicabo facere numquam magnam, sunt iure nisi
        consequuntur?
      </div>
    </main>
  );
}
