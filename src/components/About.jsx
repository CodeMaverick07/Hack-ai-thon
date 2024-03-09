const About = () => {
  return (
    <div className="bg-[#11161F]" id="about">
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
                <div className="mt-14 flex justify-end gap-3 sm:-mt-44 sm:justify-center sm:pl-[90px] lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/about_photo/general.jpg"
                        alt=""
                        className="aspect-[2/3] max-md:hidden w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 max-md:w-[160px] flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/about_photo/team.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/about_photo/winners.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 max-md:w-[155px] flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/about_photo/winners_2.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/about_photo/1.jpg"
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
            Welcome to AI-Collegion, the premier council representing the
            vibrant community of students from the Department of Artificial
            Intelligence and Data Science at VESIT. Our council is dedicated to
            fostering innovation, collaboration, and excellence within our
            department and beyond.
            <br />
            <p className="glow text-xl pt-4">Our Mission</p>
            <br />
            At AI-Collegion, our mission is to create a dynamic platform where
            students passionate about artificial intelligence and data science
            can come together to learn, grow, and make a meaningful impact.
            <br />
            <p className=" text-md">1]Promote Learning:</p>
            Provide opportunities for students to expand their knowledge and
            skills in AI and DS through workshops, seminars, and hands-on
            projects.
            <br />
            <p className="text-md">2]Foster Collaboration:</p>
            Encourage collaboration and teamwork among students, faculty, and
            industry professionals to tackle real-world challenges using AI and
            DS technologies.
            <br />
            <p className="text-md"> 3]Inspire Innovation:</p>
            Cultivate a culture of innovation and creativity by supporting
            groundbreaking research, entrepreneurial endeavors, and
            interdisciplinary projects.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
