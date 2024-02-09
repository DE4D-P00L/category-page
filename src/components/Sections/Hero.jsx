import macImg from "../../assets/monitor.png";

function Hero() {
  return (
    <section className="py-20 sm:h-[70vh] h-[40vh] flex items-center bg-[#f6f6f6]">
      <div className="flex max-w-7xl mx-auto">
        <div className="flex flex-1 px-5 flex-col gap-[30px] justify-center">
          <h1 className="sm:text-6xl text-4xl font-semibold max-w-[370px]">
            Discover <span className="text-primary">treasures</span> you never
            knew you needed
          </h1>
          <button className="bg-primary text-white px-5 py-1.5 self-start">
            Start Buying
          </button>
        </div>
        <div className="flex-1 hidden items-center h-full sm:flex ">
          <img src={macImg} alt="" className="object-contain object-center" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
