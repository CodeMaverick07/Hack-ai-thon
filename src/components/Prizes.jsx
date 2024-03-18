function Prizes() {
  return (
    <div className="h-full my-20 max-md:my-5" id="prize">
      <h1 className="text-white  text-5xl md:text-6xl text-center font-ai pt-10 tracking-widest glow">
        PRIZES
      </h1>
      <div className="flex max-md:flex-col pt-20 bg-[#11161F] justify-center sm:gap-24 gap-10">
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-zinc-950 p-10 md:p-20  shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h1 className="text-white  text-4xl md:text-4xl font-prize self-center">
            💰 Goodies 💰
          </h1>
          <h2 className="text-2xl  text-white self-center mt-5">worth</h2>
          <h2 className="text-2xl  text-white self-center">$8000</h2>
        </div>
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-slate-900 p-10 md:p-20  shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h1 className="text-white  text-3xl md:text-3xl font-prize self-center glow">
            💸 Prize pool 💸
          </h1>
          <h2 className="text-2xl  text-white self-center glow mt-5">
            cash prize
          </h2>
          <h2 className="text-2xl  text-white self-center glow">₹10,000</h2>
        </div>
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-slate-900 p-10 md:p-20 shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h1 className="text-white  text-3xl md:text-4xl font-prize self-center glow">
            Fidato E-Sports
          </h1>
          <h2 className="text-2xl  text-white self-center glow mt-5">
            Gaming Voucher
          </h2>
          <h2 className="text-2xl  text-white self-center glow">
            {" "}
            for Top 150 participants
          </h2>
        </div>
      </div>
      <div className="flex max-md:flex-col pt-20 bg-[#11161F] justify-center sm:gap-24 gap-10">
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-zinc-950 p-10 md:p-20  shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h1 className="text-white  text-4xl md:text-4xl font-prize self-center">
            SYBGEN
          </h1>
          <h2 className="text-2xl  text-white self-center mt-5">
            Global Certifications for
          </h2>
          <h2 className="text-2xl  text-white self-center">
            Top 2 teams(5k individual)
          </h2>
        </div>
        <div className="rounded-[100%] md:rounded-[100%] flex flex-col bg-slate-900 p-10 md:p-20  shadow-2xl shadow-slate-600 text-center align-middle font-ai">
          <h2 className="text-2xl  text-white self-center glow mt-5">
            Digitally verifiable certificate for
          </h2>
          <h2 className="text-2xl  text-white self-center glow">
            all participants
          </h2>
        </div>
        \
      </div>
    </div>
  );
}

export default Prizes;
