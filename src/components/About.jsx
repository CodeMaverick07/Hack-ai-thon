const About = () => {
  return (
    <div className="bg-[#11161F]">
      <main className="isolate flex w-screen h-[110vh] max-md:h-auto max-md:flex-col justify-center">
        <div className="hidden max-md:flex justify-center">
          <p className="font-robo text-5xl glow text-white text-center tracking-[0.2em]">
            About
          </p>
        </div>
        <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-20 sm:pt-10 lg:px-8 lg:pt-10">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="mt-14 flex justify-end gap-3 sm:-mt-44 sm:justify-start sm:pl-[90px] lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/about_photo/photo1.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 max-md:w-[150px] flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/about_photo/photo2.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/about_photo/photo3.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 max-md:w-[150px] flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/about_photo/photo4.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/about_photo/photo5.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl text-gray-200 font-robo text-md px-4 pt-10 max-md:pt-0">
          <h1 className="glow text-white text-5xl tracking-[0.2em] font-robo py-2 max-md:hidden">
            About
          </h1>
          <p className="pt-10 max-md:pt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magni
            quo repudiandae similique quisquam cum fugit, officiis accusamus
            voluptatibus dolor cupiditate repellat quidem, cumque in reiciendis
            deserunt, maiores nesciunt? Amet ratione delectus beatae ut. Atque
            vero, odit illo dolorem minus voluptate voluptatem, necessitatibus
            qui possimus, id quas. Officiis cumque in officia temporibus, eius
            natus vel vero expedita doloribus quos voluptatum esse veritatis.
            Suscipit pariatur quisquam eius voluptatibus? Neque ratione quasi
            odit iste quisquam exercitationem, autem numquam vero minima.
            Doloremque, dolore. Deserunt labore, architecto totam saepe eius
            minus itaque, inventore pariatur deleniti fuga rerum, ad cupiditate
            blanditiis quas laborum dicta voluptate eos sunt alias. Aspernatur
            culpa officia quod itaque temporibus adipisci magnam asperiores
            sequi ipsa porro amet magni illum, quis minima odio praesentium
            mollitia. Nobis ipsa officia consequatur voluptate ex et nemo enim,
            explicabo vel dolore provident quas nulla nisi! Veniam voluptatibus
            consectetur non deleniti quia alias dolorum? Corporis sequi nemo
            quaerat accusamus. Quidem quis, id sed iste explicabo doloremque
            suscipit et cumque ducimus vero voluptatibus, recusandae nobis
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
