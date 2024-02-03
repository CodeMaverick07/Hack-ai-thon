function Prizes() {
  return (
    <div className="h-screen mb-52 sm:mb-0" id="prize">
      <h1 className="text-white  text-5xl md:text-6xl text-center font-ai pt-10 tracking-widest glow">
        PRIZES
      </h1>
      <div className="flex flex-wrap pt-20 bg-[#11161F] justify-center sm:gap-24 gap-10">
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-zinc-950 p-10 md:p-20  shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h1 className="text-white  text-5xl md:text-8xl font-prize self-center">
            2nd
          </h1>
          <h2 className="text-2xl  text-white self-center mt-5">Cash Prize</h2>
          <h2 className="text-2xl  text-white self-center">5000</h2>
        </div>
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-slate-900 p-10 md:p-20  shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h1 className="text-white  text-5xl md:text-8xl font-prize self-center glow">
            1st
          </h1>
          <h2 className="text-2xl  text-white self-center glow mt-5">
            Cash Prize
          </h2>
          <h2 className="text-2xl  text-white self-center glow">10000</h2>
        </div>
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-zinc-950 p-10 md:p-20  shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h1 className="text-white  text-5xl md:text-8xl font-prize self-center">
            3rd
          </h1>
          <h2 className="text-2xl  text-white self-center mt-5">Coupouns</h2>
          <h2 className="text-2xl  text-white self-center">10000</h2>
        </div>
      </div>
    </div>
  );
}

export default Prizes;
