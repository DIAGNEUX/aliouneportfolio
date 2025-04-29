import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full py-10 relative overflow-hidden" id="contact">
      
      {/* Image tout au fond */}
      <img
        src="/footer-grid.svg"
        alt="grid"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      {/* Overlay bleu par-dessus l'image */}

      {/* Contenu au-dessus */}
      <div className="relative z-20 flex flex-col items-center gap-4">
        <h1 className="heading lg:max-w-[45vw] my-2 text-center">
          Vous êtes à la recherche <span className="text-purple">d'un alternant en développement web ?</span>
        </h1>

        <a href="mailto:aliouned007@gmail.com">
          <MagicButton
            title="Contactez-moi"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="relative z-20 flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Alioune Diagne
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all hover:scale-110 hover:bg-black-300"
            >
              <img src={info.img} alt="icône" width={20} height={20} />
            </a>
          ))}
        </div>

      </div>
      
    </footer>
  );
};

export default Footer;
