"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

const Projets = () => {
  return (
    <div className="py-4" id="projets">
      <h1 className="heading">
        Mes projets{" "}
        <span className="text-purple">recents</span>
      </h1>
      <div className="Relative gap-4 flex flex-wrap items-center justify-center  mt-10 ">
        {projects.map((item) => (
          <div
            className="flex flex-col gap-4 w-[45%] border border-[#0C0E23]/[.5] rounded-2xl bg-[#0C0E23] p-4"
            key={item.id}
          >
              <div className="relative flex items-center justify-center overflow-hidden mb-2">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-2xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img className="rounded-2xl" src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <div className="flex items-center justify-between mt-1 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-[#0C0E23]/[.5] rounded-full bg-[#0C0E23] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                <a href={item.weblink} target="_blank" rel="noopener noreferrer">
                  <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                    Voir le site
                  </p>
                </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
                </div>
                
              </div>
          </div>
        ))}
      </div>
      
      
    </div>
  );
};

export default Projets;
