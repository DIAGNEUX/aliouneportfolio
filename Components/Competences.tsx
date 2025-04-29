import React from "react";
import { mescompetences } from "@/data";
import { Button } from "./ui/MovingBorder";

const Competences = () => {
  return (
    <div className="py-10 w-full ">
      <h1 className="heading">
        Mes <span className="text-purple">Compétences</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-3 grid-cols-1 gap-10">
        {mescompetences.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
          >
            <div className="flex lg:flex-col flex-col lg:items-center items-start p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* Titre de la catégorie */}
              <div>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
              </div>

              {/* Affichage des icônes et des noms */}
              <div className="flex flex-wrap gap-4 justify-center-start">
                {card.leslangagesimg.map((langage) => (
                  <div key={langage.id} className="flex flex-col  items-center">
                    <img
                      src={langage.img}
                      alt={langage.nom}
                      className="h-12 w-12 object-contain mb-2" // taille ajustée et espacement entre l'image et le nom
                    />
                    <p className="text-[10px] font-thin text-white/30 text-center">{langage.nom}</p> {/* Nom sous l'icône */}
                  </div>
                ))}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Competences;
