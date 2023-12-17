"use client";

import React from "react";
import colleges from "../../../../data/collegeData.json";
import Image from "next/image";
import AdmissionProcess from "@/components/CollegeComponents/AdmissionProcess/AdmissionProcess";
import EventsExplore from "@/components/CollegeComponents/EventsExplore/EventsExplore";
import ResearchWork from "@/components/HomePageComponents/ResearchWork/ResearchWork";
import Sports from "@/components/CollegeComponents/Sports/Sports";

const CollegeDetails = ({ params }) => {
  const { collegeName } = params;
  console.log(collegeName[0]);

  if (!collegeName) {
    return <div>Loading...</div>;
  }

  const college = colleges.colleges.find(
    (college) => college.shortName.toString() === collegeName[0]
  );

  console.log(college);

  if (!college) {
    return <div>College not found</div>;
  }

  return (
    <div className="pt-20">
      <div className=" relative text-center">
        <Image
          src={college.image}
          alt="College Image"
          width={2000}
          height={2000}
          className="w-full h-[90vh]  lg:h-[100vh]"
          // className="w-full min-h-screen lg:max-h-screen"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center px-10 z-[1]">
          <h1 className="text-[#071952] text-2xl lg:text-7xl 2xl:text-8xl font-bold ">
            {college.name}
          </h1>
          <p className="text-lg lg:text-2xl 2xl:text-4xl font-bold pt-10 text-[#071952]">
            {college.slogan}
          </p>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 opacity-60"></div>
      </div>

      <div className="">
        <AdmissionProcess college={college} />
        <EventsExplore eventData={college.events} />
        <ResearchWork researchwork={college.researchPapers} />
        <Sports sports={college.sports} />
        
      </div>
    </div>
  );
};

export default CollegeDetails;
