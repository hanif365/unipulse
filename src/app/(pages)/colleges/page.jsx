import React from "react";
import colleges from "../../../data/collegeData.json";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Find Your Best Colleges</h2>
          <p className="mb-8 mt-4 max-w-lg text-base text-[#636262] md:mb-12 md:text-lg lg:mb-16">
            Discover top-notch educational institutions and explore a world of
            opportunities.
          </p>
        </div>
        <div
          className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6"
          id="college"
        >
          {colleges.colleges.slice(0, 5).map((college) => (
            <div
              key={college.id}
              className="grid gap-2 rounded-md border border-solid border-[#cdcdcd] p-3 md:p-3"
            >
              <Image
                src={college.image}
                width={1500}
                height={1500}
                alt={college.name}
                className="inline-block rounded-lg h-40"
              />
              <h3 className="text-xl font-semibold">{college?.name}</h3>
              <p className="text-sm text-[#636262]">
                Admission Last Date: {college?.admissionInfo?.deadline}
              </p>
              <p className="text-sm text-[#636262]">
                Events: {college?.events.map((event) => event?.name).join(", ")}
              </p>
              <p className="text-sm text-[#636262]">
              number of the research: {college?.researchCount}
              </p>
              <p className="text-sm text-[#636262]">
                Rating: {college?.rating}
              </p>

              <Link
                href={`/college/${college.shortName}`}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md inline-block hover:bg-blue-600 transition duration-300 text-center"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
