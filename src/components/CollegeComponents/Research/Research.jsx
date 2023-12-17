// components/Research.js
import Link from "next/link";

const researchData = [
  {
    id: 1,
    category: "Technology",
    title: "The Future of Artificial Intelligence",
    author: "Peter van der",
    time: "5 mins read",
    img: "https://i.ibb.co/v1qw7V0/res-1.jpg",
    link: "https://www.forbes.com/sites/forbestechcouncil/2023/04/10/the-future-of-artificial-intelligence/?sh=5d5a8cd94ac4",
  },
  {
    id: 2,
    category: "Science",
    title: "Exploring the Mysteries of Dark Matter",
    author: "Space Wanderlust",
    time: "2 mins read",
    img: "https://i.ibb.co/FHCsSP5/res-2.jpg",
    link: "https://www.linkedin.com/pulse/exploring-mysteries-dark-matter-what-we-know-so-far/?trk=public_post_main-feed-card_feed-article-content",
  },
  {
    id: 3,
    category: "Health",
    title: "The Mental Health Benefits of Exercise",
    author: "Lawrence Robinson",
    time: "12 mins read",
    img: "https://i.ibb.co/CJdS3wT/res-3.jpg",
    link: "https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm#:~:text=Regular%20exercise%20can%20have%20a,fanatic%20to%20reap%20the%20benefits.",
  },
  {
    id: 4,
    category: "Environment",
    title: "A review of the global climate change impacts",
    author: "Kashif Abbass",
    time: "15 mins read",
    img: "https://i.ibb.co/hMHZVFG/res-4.jpg",
    link: "https://link.springer.com/article/10.1007/s11356-022-19718-6",
  },
];

const Research = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <h2 className="text-3xl font-bold md:text-5xl text-center">
          The latest Research Work
        </h2>
        <p className="mb-8 mt-4 text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16 text-center">
          Explore our research and explore more about it
        </p>
        <div className="mb-8 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {researchData.map((research) => (
            <Link key={research.id} href={research.link} target="_blank">
              <div className="flex items-center gap-4 rounded-md p-4">
                <img
                  src={research.img}
                  alt=""
                  className="inline-block h-36 w-36 max-w-none flex-none object-cover"
                />
                <div className="flex flex-col items-start py-4">
                  <div className="mb-4 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                    <p className="text-sm font-semibold text-[#6574f8]">
                      {research.category}
                    </p>
                  </div>
                  <p className="mb-4 text-xl font-bold">{research.title}</p>
                  <div className="flex flex-col items-start text-sm text-[#636262] lg:flex-row lg:items-center">
                    <p>{research.author}</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>{research.time}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
