"use client"
import Image from "next/image";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-scroll";
import './Header.css'

const Header = () => {
  return (
    <header className="pt-28 2xl:pt-40 min-h-screen">
      <div className="mx-auto max-w-8xl px-5 py-16 md:px-10 md:pt-24 lg:pt-32">
        <div className="mx-auto mb-0 w-full max-w-4xl 2xl:max-w-6xl text-center md:mb-12 lg:mb-16">
          <h1 className="mb-4 text-4xl 2xl:text-8xl font-bold md:text-7xl">
            {/* Lifelong memories just a few seconds away */}
            Your Gateway to College Experiences
          </h1>
          <p className="mx-auto mb-5 max-w-4xl text-sm text-[#636262] sm:text-xl md:mb-6 lg:mb-8">
          Connect, Explore, Thrive
          </p>
          <div className="flex items-stretch justify-center">
          <Link
          activeClassName="active"
          to="college"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          className="btn "
          
          type="button"
        >
          BOOK COLLEGE
        </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
