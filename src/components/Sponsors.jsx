function Sponsors() {
  return (
    <>
      <div
        className="h-screen max-md:h-[85vh] w-screen bg-[#14181f]"
        id="sponsors"
      >
        <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8 pt-28">
          <div className="max-md:h-[85vh] relative overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-4xl text-white font-ai glow">
              SPONSORS
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Thank you to our generous sponsors for their invaluable support in
              making <span className=" text-white font-bold">HACK-AI-THON</span>{" "}
              a reality.
            </p>
            <div className="flex max-md:flex-col justify-center items-center gap-5 mt-5">
              <div className="">
                <img
                  src="/sponsors/GMC_Logo.jpg"
                  alt="GMC"
                  className="h-28 rounded-md"
                />
              </div>

              <div className="">
                <img
                  src="/sponsors/Wolfram.jpg"
                  className="rounded-md h-28"
                  alt=""
                />
              </div>
            </div>

            <div
              className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsors;
