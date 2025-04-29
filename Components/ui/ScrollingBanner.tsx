"use client";
import React from "react";

const ScrollingBanner = ({ skills, reverse = false }: { skills: string[], reverse?: boolean }) => {
  return (
    <div className="w-full h-[50%] flex items-center overflow-hidden">
      <div className={`flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"} whitespace-nowrap`}>
        {[...Array(10)].flatMap(() => skills).map((skill, index) => (
          <span
            key={index}
            className="text-white text-xl font-bold px-4 py-3 bg-[#12163a] mr-2 rounded-lg shadow-lg"
          >
            {skill}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 55s linear infinite;
          width: max-content;
        }
        .animate-marquee-reverse {
          display: flex;
          animation: marquee-reverse 55s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;
