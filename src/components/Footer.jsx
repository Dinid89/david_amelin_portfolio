import React from 'react';
import Logo from '../assets/img/logo.png';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center" target="_blank" rel="noopener noreferrer">
              <img src={Logo} className="h-10 w-10 rounded-full" alt="Logo" />
              <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">David Amelin</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Pages</h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Projets</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Réseaux</h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">A propos</h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">( ? )</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Curriculum</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-default sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-body sm:text-center">
            {new Date().getFullYear()} © Copyright - Tous droits réservés.
          </span>

        </div>
      </div>
    </footer>
  );
}

export default Footer;