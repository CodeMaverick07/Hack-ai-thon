const Teams = [
  {
    name: "AI CoLegion",
    branch: "AI&DS",
  },
  {
    name: "ABC",
    branch: "CMPN",
  },
  {
    name: "XYZ",
    branch: "EXTC",
  },
  {
    name: "lorem",
    branch: "INFT",
  },
  {
    name: "ipsum",
    branch: "AURO",
  },
];

function ShortList() {
  return (
    <div
      className="flex justify-center flex-col pb-20 bg-[#0D1119]"
      id="shortlist"
    >
      <h1 className="text-white text-3xl sm:text-6xl text-center font-ai pt-10 tracking-widest glow">
        SHORTLISTED TEAMS
      </h1>
      <div class=" p-4 bg-slate-900 rounded-lg shadow-2xl  sm:p-6 self-center mt-16">
        <ul class="my-4 space-y-5">
          {Teams.map((i, o) => {
            return (
              <li>
                <div class="flex items-center p-3 pr-0  text-base font-bold text-slate-800  bg-[#0D1119] hover:shadow-2xl hover:shadow-slate-500 group  gap-24 lg:gap-52">
                  <div class="flex-1 whitespace-nowrap text-xl md:text-2xl font-nav font-semibold text-slate-300 tracking-widest">
                    {i.name}
                  </div>
                  <div class="items-center justify-center px-4 mr-0 py-1 text-lg md:text-xl font-medium text-slate-300 bg-slate-900 font-nav tracking-wider">
                    {i.branch}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ShortList;
<li>
  <div class="flex items-center p-3 pr-0  text-base font-bold text-slate-800  bg-gray-50 hover:shadow-2xl group  gap-32">
    <div class="flex-1 whitespace-nowrap text-xl font-robo">AI CoLegion</div>
    <div class="items-center justify-center px-4 mr-0 py-1 text-lg font-medium text-slate-500 bg-slate-900 font-nav">
      AI&DS
    </div>
  </div>
</li>;
