import Image from "next/image";
import React from "react";
// import "./EventsExplore.css";
import Link from "next/link";

const EventsExplore = ({ eventData }) => {

    console.log(eventData);
 

  return (
    <div className="mt-20" id='events'>
      <p className="text-base text-center mb-5 md:text-lg lg:text-xl">Events Explore</p>
        {/* <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-10">
          Your Path to Enrollment
        </h1> */}
      <h2 className="text-[#071952] text-xl lg:text-4xl 2xl:text-6xl font-bold text-center px-2 lg:px-0">
        Which Events we Explore in{" "}
        <span className="text-yellow-400">{eventData[0]?.name}</span>
      </h2>
      <div className="py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 sm:max-w-6xl sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            <div className="hidden sm:block w-1 bg-[#0719529a] absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* One set start */}
            {eventData[0] && (
              <div className="mt-16 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex flex-col sm:flex-row justify-start w-full mx-auto items-center space-y-2 lg:space-y-0">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <Image
                        src={eventData[0]?.image}
                        alt="Event Photo"
                        width={1000}
                        height={1000}
                        className="rounded-md"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="px-4 py-6 bg-white rounded shadow">
                        <h3 className="text-xl font-bold">
                          {eventData[0]?.name}
                        </h3>
                        <p className="text-sm">
                          {eventData[0]?.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full p-4 bg-[#071952] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-12 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h4 className="text-xl text-white font-bold">1</h4>
                  </div>
                </div>
              </div>
            )}

            {/* new ****************************************************************************************** */}
            {eventData[1] && (
              <div className="mt-24 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex flex-col-reverse sm:flex-row justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8 pt-2 lg:pt-0">
                      <div className="px-4 py-6 bg-white rounded shadow">
                      <h3 className="text-xl font-bold">
                          {eventData[1]?.name}
                        </h3>
                        <p className="text-sm">
                          {eventData[1]?.date}
                        </p>
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <Image
                        src={eventData[1]?.image}
                        alt="Event Photo"
                        width={1000}
                        height={1000}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  <div className="rounded-full p-4 bg-[#071952] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-12 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h4 className="text-xl text-white font-bold">2</h4>
                  </div>
                </div>
              </div>
            )}
            {/* One set End */}

            {/* Two set start */}
            {eventData[2] && (
              <div className="mt-24 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex flex-col sm:flex-row justify-start w-full mx-auto items-center space-y-2 lg:space-y-0">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      {/* <Image
                        src={eventData[0]?.events[2]?.eventImage}
                        alt="Event Photo"
                        width={1000}
                        height={1000}
                        className="rounded-md"
                      /> */}
                    </div>
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="px-4 py-6 bg-white rounded shadow">
                      <h3 className="text-xl font-bold">
                          {eventData[2]?.name}
                        </h3>
                        <p className="text-sm">
                          {eventData[2]?.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full p-4 bg-[#071952] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-12 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h4 className="text-xl text-white font-bold">3</h4>
                  </div>
                </div>
              </div>
            )}

            {/* new ****************************************************************************************** */}
            {eventData[3] && (
              <div className="mt-24 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex flex-col-reverse sm:flex-row justify-start w-full mx-auto items-center">
                    {/* text */}
                    <div className="w-full sm:w-1/2 sm:pr-8 pt-2 lg:pt-0">
                      <div className="px-4 py-6 bg-white rounded shadow">
                      <h3 className="text-xl font-bold">
                          {eventData[3]?.name}
                        </h3>
                        <p className="text-sm">
                          {eventData[3]?.date}
                        </p>
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2 sm:pl-8">
                      {/* <Image
                        src={eventData[0]?.events[3]?.eventImage}
                        alt="Event Photo"
                        width={1000}
                        height={1000}
                        className="rounded-md"
                      /> */}
                    </div>
                  </div>
                  <div className="rounded-full p-4 bg-[#071952] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-12 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h4 className="text-xl text-white font-bold">4</h4>
                  </div>
                </div>
              </div>
            )}
            {/* Two set End */}
          </div>
        </div>
      </div>

      {/* <h4 className="text-xl lg:text-4xl 2xl:text-6xl text-center font-bold">
        Are you want to explore with us?
      </h4>

      <div className="flex justify-center">
        <Link
          href={`/bookticket/${eventData[0].eventLocationLink}`}
          // activeclassName="active"
          // onClick={handleBookTicket}
          className="text-[14px] lg:text-[16px] buy_btn mt-6 px-10 py-6 relative border uppercase font-semibold tracking-wider leading-none overflow-hidden bg-[#070B39] rounded-md text-white cursor-pointer"
          type="button"
        >
          <span className="absolute inset-0  bg-yellow-400"></span>
          <span className="absolute inset-0 flex justify-center items-center font-bold">
            Book Your Ticket
          </span>
          Book Your Ticket
        </Link>
      </div> */}
    </div>
  );
};

export default EventsExplore;
