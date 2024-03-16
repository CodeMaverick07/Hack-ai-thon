function Prizes() {
  return (
    <div className="h-screen mb-52 sm:mb-0" id="prize">
      <h1 className="text-white  text-5xl md:text-6xl text-center font-ai pt-10 tracking-widest glow">
        PRIZES
      </h1>
      <div className="flex flex-wrap pt-20 bg-[#11161F] justify-center sm:gap-24 gap-10">
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-zinc-950 p-10 md:p-20  shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h1 className="text-white  text-4xl md:text-4xl font-prize self-center">
            💰 Goodies 💰
          </h1>
          <h2 className="text-2xl  text-white self-center mt-5">worth</h2>
          <h2 className="text-2xl  text-white self-center">$8000</h2>
        </div>
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-slate-900 p-10 md:p-20  shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h1 className="text-white  text-3xl md:text-4xl font-prize self-center glow">
            💸 Prize pool 💸
          </h1>
          <h2 className="text-2xl  text-white self-center glow mt-5">
            cash prize
          </h2>
          <h2 className="text-2xl  text-white self-center glow">₹15,000</h2>
        </div>
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-zinc-950 p-3 md:p-8 items-center shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h1 className="text-white  text-5xl md:text-4xl font-prize self-center">
            Echo 3D
          </h1>
          <h2 className="text-2xl  text-white self-center mt-">
            subscription{" "}
          </h2>
          <h2 className="text-2xl  text-white self-center">
            for every participant (99$) <br />
            and certificate 📃
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Prizes;
