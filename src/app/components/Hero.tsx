function Hero() {
  return (
    <div className="bg-[url('../../public/herov3.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex h-screen w-screen flex-col items-center justify-between py-12">
        <p className="font-hero pt-20 text-center text-6xl leading-relaxed">
          <span className="block">Ronald</span>
          <span className="block">&</span>
          <span className="block">Raineth</span>
        </p>
        <div>
          <p className="text-xl">99D 59H 59M 59S</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
