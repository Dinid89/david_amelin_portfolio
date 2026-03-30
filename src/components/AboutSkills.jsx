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
        <ol className="relative border-s border-default">                  
          
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="text-sm font-normal leading-none text-body">Novembre 2025</time>
            <h3 className="text-lg font-semibold text-heading my-2">Formation Développeur Web / Web Mobile</h3>
            <p className="mb-4 text-base font-normal text-body">Centre Européen de Formation - CEF - (Lille) </p>
            <a href="#" className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            Learn more
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </a>
          </li>
          
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <time className="text-sm font-normal leading-none text-body">March 2022</time>
              <h3 className="text-lg font-semibold text-heading my-2">Marketing UI design in Figma</h3>
              <p className="text-base font-normal text-body">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
          </li>
          
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <time className="mb-1 text-sm font-normal leading-none text-body">April 2022</time>
              <h3 className="text-lg font-semibold text-heading my-2">E-Commerce UI code in Tailwind CSS</h3>
              <p className ="text-base font-normal text-body">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
          </li>
        </ol>
      </Item>

      <Item id={2} title="Mes autres expériences professionnelles" open={open} toggle={toggle}>
        <ol className="relative border-s border-default">                  
        
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="text-sm font-normal leading-none text-body">Septembre 2024 - Octobre 2025</time>
            <h3 className="text-lg font-semibold text-heading my-2">Product Manager - Maison Du Temps</h3>
            <span className="text-sm font-normal leading-none text-body"><a href="https://www.maisondutemps.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.maisondutemps.com</a></span>
            <p className="mb-4 text-base font-normal text-body">Création et gestion de produits pour une entreprise de vente au détail de produits d'horlogerie.</p>
          </li>
        
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="text-sm font-normal leading-none text-body">Avril 2018 - Juillet 2024</time>
            <h3 className="text-lg font-semibold text-heading my-2">Chef d'entreprise - Pil'Vite</h3>
            <p className="text-base font-normal text-body">Vente et réparation d'articles d'horlogerie.</p>
        </li>
    
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
          <time className="mb-1 text-sm font-normal leading-none text-body">Avril 2014 - Mars 2018</time>
          <h3 className="text-lg font-semibold text-heading my-2">Vendeur Senior - TAG Heuer</h3>
          <span className="text-sm font-normal leading-none text-body"><a href="https://www.tagheuer.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.tagheuer.com</a></span>
          <p className ="text-base font-normal text-body">Vendeur et Formateur de montres haut de gamme.</p>
        </li>
      </ol>
      </Item>

      <Item id={3} title="Mes compétences" open={open} toggle={toggle}>
        <AboutPercent />
      </Item>

    </div>
  );
}

export default AboutSkills;