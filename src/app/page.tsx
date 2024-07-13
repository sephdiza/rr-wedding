"use client";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <div className="flex h-screen flex-col items-center justify-between bg-[url('../../public/heroimg.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-screen w-full flex-col items-center justify-between bg-[#145DA1]/30 py-12 backdrop-brightness-50">
          <p className="pt-11 text-center text-9xl">
            <span className="block">Ron</span>
            <span className="block">&</span>
            <span className="block">Raineth</span>
          </p>
          <div>
            <p className="text-xl">99H 99D 59M 59S</p>
          </div>
        </div>
      </div>
    </main>
  );
}
