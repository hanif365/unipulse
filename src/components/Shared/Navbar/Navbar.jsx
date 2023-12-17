"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaEquals, FaXmark } from "react-icons/fa6";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const session = useSession();
  const pathname = usePathname();

  return (
    <div>
      <nav className="md:translate-y-0 w-full fixed bg-white top-0 left-0 right-0 z-10 shadow-sm">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl 2xl:max-w-screen-2xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex items-center">
                <Image
                  src="/uni_logo.png"
                  width={50}
                  height={50}
                  alt="logo"
                  className="logo_navbar cursor-pointer rounded-xl"
                  onClick={() => {
                    router.push("/");
                  }}
                />
              </div>

              <div className="md:hidden">
                <button
                  className="text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar((prev) => !prev)}
                >
                  {navbar ? (
                    <FaXmark
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "red",
                      }}
                    />
                  ) : (
                    <FaEquals
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "#000000",
                      }}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex cursor-pointer">
                <li
                  className={`text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-[#7EA0FF] transition duration-500 ease-in-out }`}
                >
                  <Link
                    href="/"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-[#7EA0FF] transition duration-500 ease-in-out }`}
                >
                  <Link
                    href="/colleges"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    College
                  </Link>
                </li>
                <li
                  className={`text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-[#7EA0FF] transition duration-500 ease-in-out }`}
                >
                  <Link
                    href="/admission"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    Admission
                  </Link>
                </li>
                <li
                  className={`text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-[#7EA0FF] transition duration-500 ease-in-out }`}
                >
                  <Link
                    href="/mycollege"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    My College
                  </Link>
                </li>


                {session.status === "authenticated" ? (
                    <li
                      className={`text-xl text-black font-bold py-2 px-6 text-center border-b-2 md:border-b-0 transition duration-700 ease-in-out`}
                    >
                      <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => signOut()}
                      >
                        Logout
                      </button>
                    </li>
                  ) : (
                    <li
                      className={`text-xl  font-bold py-2 px-6 text-center border-b-2 md:border-b-0 transition duration-700 ease-in-out ${
                        pathname === "/login"
                          ? "text-green-600"
                          : "text-green-400"
                      }`}
                    >
                      <Link
                        href="/login"
                        onClick={() => {
                          setNavbar((prev) => !prev);
                        }}
                      >
                        Login
                      </Link>
                    </li>
                  )}


              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
