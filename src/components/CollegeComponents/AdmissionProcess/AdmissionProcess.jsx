"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa6";

const admissionProcessData = [
  {
    id: 1,
    title: "Application Submission",
    content:
      "Submit your application online through the college portal. Make sure to provide accurate information and complete all required fields.",
  },
  {
    id: 2,
    title: "Interview Process",
    content:
      "Successful applicants will be invited for an interview. Prepare for the interview by reviewing common questions related to your chosen field of study.",
  },
  {
    id: 3,
    title: "Document Submission",
    content:
      "After acceptance, submit necessary documents such as transcripts, letters of recommendation, and proof of identity. Ensure all documents are authentic.",
  },
];

const AdmissionProcess = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (itemNo) => {
    setActiveAccordion((prevActive) => (prevActive === itemNo ? null : itemNo));
  };

  const isAccordionOpen = (itemNo) => {
    return itemNo === activeAccordion;
  };

  return (
    <div className="mt-10 lg:mt-24 lg:px-20 2xl:px-40">
      <div className="text-center pb-10">
        <p className="text-base md:text-lg lg:text-xl">Admission Process</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-10">
          Your Path to Enrollment
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex-1 self-center">
          <div className="rounded overflow-hidden px-10 lg:px-20 lg:py-10">
            {admissionProcessData.map((item) => (
              <div key={item.id}>
                <div
                  className={`group outline-none accordion-section `}
                  tabIndex="1"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="group flex justify-between px-4 py-6 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                    <div
                      className={`${
                        isAccordionOpen(item.id)
                          ? "text-[#7EA0FF] -rotate-180"
                          : "text-gray-500"
                      } h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 absolute left-0 `}
                    >
                      <FaCaretDown style={{ width: "40px", height: "40px" }} />
                    </div>
                    <div
                      className={`${
                        isAccordionOpen(item.id)
                          ? "text-[#7EA0FF]"
                          : "text-gray-500"
                      } font-bold uppercase transition ease duration-500 ml-8`}
                    >
                      {item.title}
                    </div>
                  </div>
                  <hr />
                  <div
                    className={`${
                      isAccordionOpen(item.id) ? "max-h-screen" : ""
                    }  max-h-0 px-4 overflow-hidden ease duration-500`}
                  >
                    <p className="p-2 text-black text-justify">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 self-center pt-10 lg:p-0">
          <Image
            src="/admission.jpg"
            alt="AdmissionProcess Photo"
            width={1500}
            height={1500}
            className="inline-block rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
