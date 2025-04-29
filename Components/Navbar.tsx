'use client'
import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-[999] flex justify-between items-center py-3 bg-black-200 mt-2 shadow-lg rounded-full px-6">
      <ul className="flex gap-4 text-white/80">
        <li>
          <a href="#accueil" className="hover:text-white transition-colors duration-300">Accueil</a>
        </li>
        <li>
          <a href="#projets" className="hover:text-white transition-colors duration-300">Projets</a>
        </li>
        <li>
          <a href="#a-propos" className="hover:text-white transition-colors duration-300">À propos</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
