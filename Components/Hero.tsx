// import { FaLocationArrow } from "react-icons/fa6";
"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa";


const Hero = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    console.log("Thème actuel :", theme);
    console.log("Thème résolu :", resolvedTheme);
    console.log("Classes de <html> :", document.documentElement.classList);

    // Forcer le mode sombre si ce n'est pas appliqué
    if (resolvedTheme !== "dark") {
      setTheme("dark");
    }
  }, [theme, resolvedTheme]);
  useEffect(() => {
    console.log("Classes de <html> :", document.documentElement.classList);
  }, []);
  return (
    <div className=" w-[100%] relative h-screen " id="accueil">
      <div className="absolute top-0 left-0 w-full h-full z-40">
      <Spotlight 
      />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute  inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative h-full w-full z-50 pointer-events-auto">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-1000">
           Créer des applications performantes et élégantes, c’est ma passion.
          </p> */}

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Développeur Full-Stack en devenir"
            className="text-center text-[40px] md:text-5xl lg:text-6xl leading-4"
          />

          <p className="text-center  text-blue-100 md:tracking-wider mb-4 text-sm md:text-sm lg:text-md">
          Je recherche une alternance pour développer <br /> mes compétences et relever de nouveaux défis.
          </p>

          <a href="#a-propos" className="mt-3 cursor-pointer z-40">
            <MagicButton
              title="Voir mes projets"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
