// src/components/AboutSkills.jsx
import React from "react";
import AboutPercent from "./AboutPercent";

function AboutSkills() {
  return (
    <div id="accordion-card" data-accordion="collapse" className="space-y-4">

      {/* Accordion 1 */}
      <h2 id="accordion-card-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
          data-accordion-target="#accordion-card-body-1"
          aria-expanded="true"
          aria-controls="accordion-card-body-1"
        >
          <span>Mes expériences professionnelles de Développeur Web</span>
          <svg
            data-accordion-icon
            className="w-5 h-5 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m5 15 7-7 7 7"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-card-body-1"
        className="hidden border border-t-0 border-default rounded-b-base shadow-xs"
        aria-labelledby="accordion-card-heading-1"
      >
        <div className="p-4 md:p-5">
          <p className="mb-2 text-body">
            Flowbite est une bibliothèque open-source de composants interactifs construite sur Tailwind CSS.
          </p>
        </div>
      </div>

      {/* Accordion 2 */}
      <h2 id="accordion-card-heading-2" className="mt-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
          data-accordion-target="#accordion-card-body-2"
          aria-expanded="false"
          aria-controls="accordion-card-body-2"
        >
          <span>Mes autres expériences professionnelles</span>
          <svg
            data-accordion-icon
            className="w-5 h-5 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m5 15 7-7 7 7"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-card-body-2"
        className="hidden border border-t-0 border-default rounded-b-base shadow-xs"
        aria-labelledby="accordion-card-heading-2"
      >
        <div className="p-4 md:p-5">
          <p className="mb-2 text-body">
            Flowbite est conçu à partir de Figma et chaque composant a son équivalent design.
          </p>
        </div>
      </div>

      {/* Accordion 3 */}
      <h2 id="accordion-card-heading-3" className="mt-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
          data-accordion-target="#accordion-card-body-3"
          aria-expanded="false"
          aria-controls="accordion-card-body-3"
        >
          <span>Mes compétences</span>
          <svg
            data-accordion-icon
            className="w-5 h-5 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m5 15 7-7 7 7"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-card-body-3"
        className="hidden border border-t-0 border-default rounded-b-base shadow-xs"
        aria-labelledby="accordion-card-heading-3"
      >
        <div className="p-4 md:p-5">
            <AboutPercent />
        </div>
      </div>
    </div>
  );
}

export default AboutSkills;