function TimeLine() {
  const timeline = [
    {
      name: "Registrtion",
      description:
        "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
      date: "9th feb",
    },
    {
      name: "Hack-ai-thon",
      description:
        "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
      date: "10th feb",
    },
    {
      name: "Results",
      description:
        "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
      date: "11th feb",
    },
  ];
  return (
    <>
      <div className="bg-[#0D1119] max-md:hidden">
        <h1 className="text-white text-6xl text-center font-ai pt-10 tracking-widest glow">
          SCHEDULE
        </h1>
        <div class="max-w-7xl mx-auto w-full h-screen grid grid-cols-9 px-2 pb-20 pt-20">
          <div class="col-span-4 w-full h-fit">
            <div class="w-full h-full bg-transparent shadow-2xl shadow-slate-800 rounded-md p-2 py-5 md:pl-4">
              <h1 class="text-white text-3xl  py-2 font-nav font-semibold tracking-widest">
                {timeline[0].name}
              </h1>
              <p class="text-[#C0C0C0] sm:text-sm text-xs font-robo">
                {timeline[0].description}
              </p>
            </div>
          </div>
          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-slate-800"></div>
            <div class="absolute w-6 h-6 rounded-full bg-slate-800 z-10 text-white text-center shadow-lg shadow-slate-800 font-ai">
              1
            </div>
          </div>
          <div class="col-span-4 w-full h-full"></div>

          <div class="col-span-4 w-full h-full"></div>
          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-slate-800"></div>
            <div class="absolute w-6 h-6 rounded-full bg-slate-800 z-10 text-white text-center shadow-lg shadow-slate-800 font-ai">
              2
            </div>
          </div>
          <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-transparent shadow-2xl shadow-slate-800 rounded-md p-2 md:pl-4">
              <h1 class="text-white text-3xl py-2 font-nav font-semibold tracking-widest">
                {timeline[1].name}
              </h1>
              <p class="text-[#C0C0C0] sm:text-sm text-xs font-robo">
                {timeline[0].description}
              </p>
            </div>
          </div>

          <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-transparent shadow-2xl shadow-slate-800 rounded-md p-2 md:pl-4">
              <h1 class="text-white text-3xl  py-2 font-nav font-semibold tracking-widest">
                {timeline[2].name}
              </h1>
              <p class="text-[#C0C0C0] sm:text-sm text-xs font-robo">
                {timeline[0].description}
              </p>
            </div>
          </div>
          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-slate-800 shadow-xl shadow-gray-600"></div>
            <div class="absolute w-6 h-6 rounded-full bg-slate-800 z-10 text-white text-center shadow-lg shadow-slate-800 font-ai">
              3
            </div>
          </div>
          <div class="col-span-4 w-full h-full"></div>
        </div>
      </div>
      {/* for phone */}
      <div className="bg-[#11161F] max-md:flex hidden max-md:mt-10">
        <main className="isolate">
          <h1 className="text-white text-3xl text-center pb-5 font-ai glow">
            Shedule
          </h1>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.name}>
                  <time className="flex items-center text-indigo-500 text-sm font-semibold leading-6">
                    <svg
                      viewBox="0 0 4 4"
                      className="mr-4 h-1 w-1 flex-none"
                      aria-hidden="true"
                    >
                      <circle cx={2} cy={2} r={2} fill="currentColor" />
                    </svg>
                    {item.date}
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    />
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default TimeLine;
