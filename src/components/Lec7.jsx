import React from "react";

const Lec7 = () => {
  return (
    <div className="m-0 h-screen bg-[#AECABC]">
      <section className="h-screen"></section>

      <section className="middle p-5 flex items-center h-[calc(100vh-16em)]">
        <div className="mask overflow-hidden h-auto flex-1">
          <h2 className="mt-[10em] text-4xl m-0 self-center">sophen</h2>
        </div>

        <div className="card relative self-center card1 bg-[#c3d7cd] absolute right-[20%] top-[4em] w-[200px] h-[13em] rounded-[0.3em] -z-10">
          <div className="mask overflow-hidden h-auto">
            <h3>
              advanced
              <br />
              interactions
            </h3>
          </div>
          <div className="mask overflow-hidden h-auto">
            <p>
              Equipped with the latest technology to create the most advanced
              interactions.
            </p>
          </div>
          <div className="box bg-[#c3d7cd] absolute right-[20%] top-[4em] w-[200px] h-[13em] rounded-[0.3em] -z-10"></div>
        </div>

        <div className="card self-center relative card2 bg-[#c3d7cd] absolute right-[20%] top-[4em] w-[200px] h-[13em] rounded-[0.3em] -z-10">
          <div className="mask overflow-hidden h-auto">
            <h3>
              extended
              <br />
              easing
            </h3>
          </div>
          <div className="mask overflow-hidden h-auto">
            <p>
              Utilize our expert Flo Protocol to extend easing capabilities.
            </p>
          </div>
          <div className="box bg-[#c3d7cd] absolute right-[20%] top-[4em] w-[200px] h-[13em] rounded-[0.3em] -z-10"></div>
        </div>
      </section>

      <section className="h-screen"></section>
    </div>
  );
};

export default Lec7;
