import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResearchWork = ({ researchwork }) => {
  return (
    <section className="bg-[#f2f2f783]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <h2 className="text-xl lg:text-4xl 2xl:text-6xl font-bold text-center px-2 lg:px-0">
          Find out the latest news with Flowspark
        </h2>
        <p className="mb-16 mt-4 text-center text-[#647084]">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>
        <div className="mx-auto grid max-w-xl gap-4">
          {researchwork.map((item) => (
            <Link key={item.title} href={item.link} className="flex flex-col items-center pb-8 text-center [border-bottom:1px_solid_rgb(100,_112,_132)] sm:flex-row sm:text-left">
              <Image
                src={item.image}
                alt="research data photo"
                width={160}
                height={160}
                className="inline-block h-40 w-40"
              />
              <div className="pt-4 sm:px-8 sm:pt-0 space-y-2">
                <p className="font-bold">{item.title}</p>
                <p className="">{item.author}</p>
                <p className="text-sm">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchWork;

