"use client";
import { useState } from "react";
import { gridItems } from "@/data";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import ScrollingBanner from "./ui/ScrollingBanner";
import Lottie from "react-lottie";
import { animate } from "motion";
import animationData from "../data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline, IoDownload } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";

const Grid = () => {
  const frontendSkills = ["React", "Vue.js", "JavaScript", "Tailwind", "CSS", "Node.js"];
  const backendSkills = ["Node.js", "Express", "NestJS", "Django", "Ruby on Rails", "Spring Boot"];
  
  const [copiemail , setCopiemail] = useState(false);
  const [copiegithub , setCopiegithub] = useState(false);
  const [copielinkedin , setCopielinkedin] = useState(false);
  const handleCopiemail = () => {
    navigator.clipboard.writeText("aliouned007@gmail.com");
    setCopiemail(true);

  }
  const handleCopiegithub = () => {
    navigator.clipboard.writeText("aliouned007@gmail.com");
    setCopiegithub(true);

  }
  const handleCopielinkedin = () => {
    navigator.clipboard.writeText("aliouned007@gmail.com");
    setCopielinkedin(true);

  }



  return (
    <section id="a-propos" className="max-w-7xl mx-auto p-4">
      {/* Grille principale */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Première colonne 90vh */}
        <div className="md:col-span-1 h-[90vh]">
          {gridItems[0] && (
            <div className="relative h-full rounded-2xl overflow-hidden">
              <img src={gridItems[0].img} alt="Grid Item" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c] via-[#0a0f2c]/60 via-60% to-transparent"></div>
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12163a] to-black/85 opacity-80"></div> */}
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="font-bold text-lg">{gridItems[0].title}</h3>
                <p className="text-white/70 mt-2">{gridItems[0].description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Deuxième colonne avec 90vh, composée de deux éléments à 45vh chacun */}
        <div className="md:col-span-1 h-[90vh] grid grid-rows-2 gap-4  ">
          {gridItems[1] && (

            <div className="h-[43vh] relative rounded-2xl overflow-hidden border border-[#12163a]">
              <div className=" p-4 text-white">
                <h3 className="font-bold text-2xl">{gridItems[1].title}</h3>
                <ul className="mt-6  flex items-center gap-2 justify-center w-full">
                {gridItems[1]?.stats?.map((stat, index) => (
                    <li key={index} className="text-xl flex m ">
                      <div className="px-4 py-2 bg-[#161A31]/50 rounded-lg text-center">
                        <p className="bg-gradient-to-b from-[#DD4AFF] to-[#1d2eae] bg-clip-text text-transparent text-6xl">{stat.value}</p>
                        <p className="text-xs text-white/40">{stat.label}</p>
                      </div>
                    </li>
                  ))}
                </ul>


              </div>
            </div>
          )}

          {gridItems[2] && (
            <div className="h-[43vh] border bg-grid-black-100/[0.2]  border-[#12163a] relative rounded-2xl overflow-hidden">
              <div className="h-full flex items-center justify-center p-4 text-white  ">
                <div>
                  
                <h3 className="font-bold text-lg text-center w-full  ">{gridItems[2].title}</h3>
                <div className="flex items-center justify-center w-full mt-2"> 
                  <button className="bg-gradient-to-r from-[#DD4AFF] to-[#1d2eae] rounded-lg px-4 py-3 focus:outline-none">Telecherger mon cv</button>
                </div>
              </div>
              </div>
              
            </div>
          )}
        </div>

        {/* Troisième colonne 90vh */}
        <div className="md:col-span-1 h-[90vh] relative overflow-hidden rounded-2xl  flex flex-col items-start justify-around border border-[#12163a] ">
        <div className="absolute z-10 inset-0 bg-gradient-to-r from-[#06091F]/70 via-transparent to-[#06091F]/70 opacity-90"></div>
          <div className="flex flex-col px-4 leading-5">
            <p className="text-white/40 text-md font-thin">j'essaie constamment d'ameliorer</p>
            <p className="text-white text-2xl font-bold ">Mes compétences</p>
          </div>
        <div className="flex flex-col gap-4">
          <ScrollingBanner skills={frontendSkills} />
          <ScrollingBanner skills={backendSkills} reverse={true} />
          <ScrollingBanner skills={frontendSkills} />
        </div>
          </div>

        {/* Cinquième et sixième éléments (50vh chacun) */}
        <div className="md:col-span-1 h-[50vh] ">
          {gridItems[4] && (
            <div className="relative h-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
             <BackgroundGradientAnimation>
               <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
              </BackgroundGradientAnimation>
              <div className="absolute inset-0 flex items-center justify-center">
              {/* <div>
                <Lottie options={{
                   loop:copie,
                  autoplay: copie,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
                }} />
              </div> */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="flex flex-col gap-2">
                <div className=" text-white">
                <p className="font-bold text-2xl text-center">{gridItems[4].title}</p>
              </div>
                  <MagicButton title={copiemail ? 'email copié' : 'copie mon mail'}  icon={<IoCopyOutline/>} position="left" otherClasses="bg-[#191a31]" handleClick={handleCopiemail}  />

                  <MagicButton title={copiegithub ? 'github copié' : 'copie mon github'}  icon={<IoCopyOutline/>} position="left" otherClasses="bg-[#191a31]" handleClick={handleCopiegithub}  />

                  <MagicButton title={copielinkedin ? 'linkedin copie' : 'copie mon linkedin'}  icon={<IoCopyOutline/>} position="left" otherClasses="bg-[#191a31]" handleClick={handleCopielinkedin}  />


                </div>
                
              </div>
              </div>

              
            </div>
          )}
        </div>

        <div className="md:col-span-2 h-[50vh] rounded-lg border border-[#12163a]">
          {gridItems[5] && (
            <div className="relative h-full rounded-2xl overflow-hidden">
              <div className="absolute right-[0%] top-0">
              <img src={gridItems[5].img} alt="Grid Item" className=" h-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06091F]/80 to-[#06091F] opacity-90"></div>
              <div className="w-2/3 absolute left-[5%] top-1/2 transform -translate-y-1/2 p-4 text-white">
                <p className="text-white/50 font-thin">{gridItems[5].description}</p>
                <h3 className="font-bold text-2xl">{gridItems[5].title}</h3>
              </div>
            </div>
          )}
        </div>
       
      </div>
    </section>
  );
};

export default Grid;
