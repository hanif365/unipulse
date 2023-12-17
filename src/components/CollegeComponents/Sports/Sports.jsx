import React from "react";

const Sports = ({ sports }) => {
  console.log(sports);
  return (
    // <section>
    //   <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    //     <div className="flex flex-col items-center">
    //       <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
    //         <h2 className="text-3xl font-semibold md:text-5xl">
    //           World Famous Sports Champ
    //         </h2>
    //         <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
    //           Enjoy every match with us
    //         </p>
    //       </div>
    //       <div className="mb-8 grid w-full grid-cols-1 md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16">
    //         <div
    //           href="#"
    //           className="relative mb-12 flex h-[560px] max-w-full grid-cols-1 flex-col gap-4 overflow-hidden rounded-xl  bg-white font-bold text-black [grid-area:1/1/2/2] md:[grid-area:1/1/2/4]"
    //         >
    //           <div className="absolute bottom-0 left-0 right-0 top-auto z-20 flex w-full max-w-[800px] flex-col items-start justify-start rounded-xl bg-white p-6 md:bottom-1 md:left-1">
    //             <p className="text-xl font-bold md:text-2xl">
    //               Ready to enjoy every moment in the stadium to the fullest!
    //             </p>
    //           </div>
    //           <video
    //             loop
    //             autoPlay
    //             muted
    //             className="inline-block h-full w-full object-cover"
    //           >
    //             <source src="/sports_video.mp4" type="video/mp4" />
    //             Your browser does not support the video tag.
    //           </video>
    //         </div>

    //         <div
    //           href="#"
    //           className="max-[767px]: flex max-w-full grid-cols-1 flex-col gap-4 rounded-md bg-white py-4 font-bold text-black lg:px-2"
    //         >
    //           <img
    //             src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980defd9d4a1fd1cf20a3d_Rectangle%20801.jpg"
    //             alt=""
    //             className="inline-block h-60 w-full rounded-xl object-cover"
    //           />
    //           <div className="flex w-full flex-col items-start justify-start py-4">
    //             <p className="mb-4 text-xl font-bold md:text-2xl">
    //               The latest news with Flowspark
    //             </p>
    //             <p className="font-normal text-[#636262]">
    //               Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
    //               amet luctus venenatis elit ut aliquam,
    //             </p>
    //           </div>
    //         </div>
    //         <div
    //           href="#"
    //           className="flex max-w-full grid-cols-1 flex-col gap-4 rounded-md bg-white py-4 font-bold text-black lg:px-2"
    //         >
    //           <img
    //             src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980df03e820073f8125fb5_Rectangle%20801-2.jpg"
    //             alt=""
    //             className="inline-block h-60 w-full rounded-xl object-cover"
    //           />
    //           <div className="flex w-full flex-col items-start justify-start py-4">
    //             <p className="mb-4 text-xl font-bold md:text-2xl">
    //               The latest news with Flowspark
    //             </p>
    //             <p className="font-normal text-[#636262]">
    //               Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
    //               amet luctus venenatis elit ut aliquam,
    //             </p>
    //           </div>
    //         </div>
    //         <div
    //           href="#"
    //           className="flex max-w-full grid-cols-1 flex-col gap-4 rounded-md bg-white py-4 font-bold text-black lg:px-2"
    //         >
    //           <img
    //             src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980df0bd7f152c341ab985_Rectangle%20801-1.jpg"
    //             alt=""
    //             className="inline-block h-60 w-full rounded-xl object-cover"
    //           />
    //           <div className="flex w-full flex-col items-start justify-start py-4">
    //             <p className="mb-4 text-xl font-bold md:text-2xl">
    //               The latest news with Flowspark
    //             </p>
    //             <p className="font-normal text-[#636262]">
    //               Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
    //               amet luctus venenatis elit ut aliquam,
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center">
          <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-semibold md:text-5xl">
              World Famous Sports Champ
            </h2>
            <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
              Enjoy every match with us
            </p>
          </div>

          {/* Static Video Section */}
          <div className="relative mb-12 flex h-[560px] max-w-full grid-cols-1 flex-col gap-4 overflow-hidden rounded-xl bg-white font-bold text-black [grid-area:1/1/2/2] md:[grid-area:1/1/2/4]">
            <div className="absolute bottom-0 left-0 right-0 top-auto z-20 flex w-full max-w-[800px] flex-col items-start justify-start rounded-xl bg-white p-6 md:bottom-1 md:left-1">
              <p className="text-xl font-bold md:text-2xl">
                Ready to enjoy every moment in the stadium to the fullest!
              </p>
            </div>
            <video
              loop
              autoPlay
              muted
              className="inline-block h-full w-full object-cover"
            >
              <source src="/sports_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Dynamic Sports Sections */}
          <div className="mb-8 grid w-full grid-cols-1 md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16">
            {sports.map((sport) => (
              <div
                key={sport.id}
                className="relative mb-12 flex h-[560px] max-w-full grid-cols-1 flex-col gap-4 overflow-hidden rounded-xl bg-white font-bold text-black md:grid-cols-3"
              >
                <div className="absolute bottom-0 left-0 right-0 top-auto z-20 flex w-full max-w-[800px] flex-col items-start justify-start border bg-white p-6 ">
                  <p className="text-xl font-bold md:text-2xl">
                    {sport.subtitle}
                  </p>
                </div>
                <img
                  src={sport?.image}
                  alt=""
                  className="inline-block h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
