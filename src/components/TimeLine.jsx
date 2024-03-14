function TimeLine() {
  const timeline = [
    {
      name: "Inauguration",
      description: "The inauguration will be held on 23rd March at 4 PM.",
      date: "23rd march 4 PM",
    },
    {
      name: "Mentoring Session",
      description:
        "A mentoring session will take place on 23rd March at 7 PM. If you have any issues, you can ask our experts for assistance",
      date: "23rd march 7 PM",
    },
    {
      name: "1st Round Submission",
      description:
        "The first round submission will be held on 24th March at 12 AM.",
      date: "24th march 12 AM",
    },
    {
      name: "2nd Round Submission",
      description:
        "The second round submission will be held on 24th March at 10 AM, and teams will be shortlisted.",
      date: "24th march 10 AM",
    },
    {
      name: "Final Submission",
      description: "The final submission will be held on 24th March at 3 PM.",
      date: "24th march 3 PM",
    },
  ];
  return (
    <>
      <div className="bg-[#0D1119] max-md:hidden " id="schedule">
        <h1 className="text-white text-6xl text-center font-ai pt-10 tracking-widest glow">
          SCHEDULE
        </h1>
        <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 pb-20 pt-20">
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
                {timeline[1].description}
              </p>
            </div>
          </div>

          <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-transparent shadow-2xl shadow-slate-800 rounded-md p-2 md:pl-4">
              <h1 class="text-white text-3xl  py-2 font-nav font-semibold tracking-widest">
                {timeline[2].name}
              </h1>
              <p class="text-[#C0C0C0] sm:text-sm text-xs font-robo">
                {timeline[2].description}
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
          <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full  rounded-md p-2 md:pl-4"></div>
          </div>

          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-slate-800 shadow-xl shadow-gray-600"></div>
            <div class="absolute w-6 h-6 rounded-full bg-slate-800 z-10 text-white text-center shadow-lg shadow-slate-800 font-ai">
              4
            </div>
          </div>
          <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-transparent shadow-2xl shadow-slate-800 rounded-md p-2 md:pl-4">
              <h1 class="text-white text-3xl py-2 font-nav font-semibold tracking-widest">
                {timeline[3].name}
              </h1>
              <p class="text-[#C0C0C0] sm:text-sm text-xs font-robo">
                {timeline[3].description}
              </p>
            </div>
          </div>
          <div class="col-span-4 w-full h-full"></div>
          <div class="col-span-4 w-full h-full"></div>
          <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-transparent shadow-2xl shadow-slate-800 rounded-md p-2 md:pl-4">
              <h1 class="text-white text-3xl  py-2 font-nav font-semibold tracking-widest">
                {timeline[4].name}
              </h1>
              <p class="text-[#C0C0C0] sm:text-sm text-xs font-robo">
                {timeline[4].description}
              </p>
            </div>
          </div>
          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-slate-800 shadow-xl shadow-gray-600"></div>
            <div class="absolute w-6 h-6 rounded-full bg-slate-800 z-10 text-white text-center shadow-lg shadow-slate-800 font-ai">
              5
            </div>
          </div>

          <div class="col-span-4 w-full h-full"></div>
        </div>
      </div>
      {/* for phone */}
      <div
        className="bg-[#11161F] max-md:flex hidden max-md:mt-10"
        id="schedule"
      >
        <main className="isolate">
          <h1 className="text-white text-3xl text-center pb-5 font-ai glow">
            Schedule
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
