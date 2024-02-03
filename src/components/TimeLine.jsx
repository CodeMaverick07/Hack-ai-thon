function TimeLine() {
  return (
    <div className="bg-[#0D1119] h-auto pb-32">
      <h1 className="text-white  text-5xl md:text-6xl text-center font-ai pt-10 tracking-widest glow">
        SCHEDULE
      </h1>
      <div class="max-w-7xl mx-auto w-full h-screen grid grid-cols-9 px-2 pb-20 pt-20">
        <div class="col-span-4 w-full h-fit">
          <div class="w-full h-full bg-transparent shadow-2xl shadow-slate-800 rounded-md p-2 py-5 md:pl-4">
            <h1 class="text-white text-3xl  py-2 font-nav font-semibold tracking-widest">
              Title
            </h1>
            <p class="text-[#C0C0C0] sm:text-sm text-xs font-robo">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
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
              Title
            </h1>
            <p class="text-[#C0C0C0] sm:text-sm text-xs font-robo">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
            </p>
          </div>
        </div>

        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full bg-transparent shadow-2xl shadow-slate-800 rounded-md p-2 md:pl-4">
            <h1 class="text-white text-3xl  py-2 font-nav font-semibold tracking-widest">
              Title
            </h1>
            <p class="text-[#C0C0C0] sm:text-sm text-xs font-robo">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
              quas omnis vero totam ullam, reprehenderit ratione pariatur
              accusamus suscipit odit nostrum?
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
  );
}

export default TimeLine;
