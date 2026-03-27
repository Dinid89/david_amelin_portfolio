import React, { useState } from "react";
import AboutPercent from "./AboutPercent";

function Item({ id, title, children, open, toggle }) {
  const isOpen = open === id;

  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden bg-gray-900">
      
      <button
        onClick={() => toggle(id)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800 transition"
      >
        <span className="font-medium text-white">{title}</span>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            {isOpen ? "Fermer" : "Ouvrir"}
          </span>

          <svg
            className={`w-5 h-5 text-white transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] p-5" : "max-h-0"
        }`}
      >
        <div className="text-gray-300">{children}</div>
      </div>
    </div>
  );
}

function AboutSkills() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="space-y-4">

      <Item id={1} title="Mes expériences professionnelles de Développeur Web" open={open} toggle={toggle}>
        Flowbite est une bibliothèque open-source construite avec Tailwind CSS.
      </Item>

      <Item id={2} title="Mes autres expériences professionnelles" open={open} toggle={toggle}>
        Flowbite est conçu avec Figma et chaque composant a son équivalent design.
      </Item>

      <Item id={3} title="Mes compétences" open={open} toggle={toggle}>
        <AboutPercent />
      </Item>

    </div>
  );
}

export default AboutSkills;