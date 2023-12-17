// components/Testimonials.js
import React from "react";
import { FaStar } from "react-icons/fa6";

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quote:
      '“ Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis "',
    image:
      "https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png",
    name: "Laila Bahar",
    role: "Designer",
  },
  {
    id: 2,
    rating: 4,
    quote:
      '“ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat "',
    image:
      "https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb5e3ea08ab4c244194a_Ellipse%205-4.png",
    name: "John Doe",
    role: "Developer",
  },
  {
    id: 3,
    rating: 4,
    quote:
      '“ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur "',
    image:
      "https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb614a296368b383467c_Ellipse%205-3.png",
    name: "Alice Johnson",
    role: "Marketing Specialist",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f2f2f7]">
      <div className="mx-auto w-full max-w-7xl px-5 py-6 md:px-10 md:py-10 lg:py-16">
        <h1 className="text-3xl text-center md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-5">
          Testimonials
        </h1>
        <p className="mb-8 mt-4 text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16 text-center">
          What our students are saying
        </p>
        <ul className="mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:mb-16">
          {testimonialsData.map((testimonial) => (
            <li
              key={testimonial.id}
              className="grid gap-8 border border-solid border-dfdfdf bg-white p-8 md:p-10"
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="mr-1.5 w-4">
                    {index <= testimonial.rating ? (
                      <FaStar color="#FFD700" />
                    ) : (
                      <FaStar color="#DFE1E6" />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-647084">{testimonial.quote}</p>
              <div className="flex">
                <img
                  src={testimonial.image}
                  alt=""
                  className="mr-4 h-16 w-16"
                />
                <div className="flex flex-col">
                  <h6 className="font-bold">{testimonial.name}</h6>
                  <p className="text-sm text-636262">{testimonial.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
