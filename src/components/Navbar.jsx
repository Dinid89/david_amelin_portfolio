import { useState, useEffect, useRef } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Fermer le menu mobile si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef}
      className="bg-gradient-to-b from-black to-gray-900 text-white w-full z-20 top-0 left-0 border-b border-gray-800"
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={Logo}
            className="h-10 w-10 rounded-full"
            alt="Logo"
          />
          <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
            David Amelin
          </span>
        </Link>

        {/* Menu principal (desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 font-medium text-white">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/Projets" className="hover:text-gray-400">Projets</Link></li>
            <li><Link to="/About" className="hover:text-gray-400">À propos</Link></li>
            <li><Link to="/Contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
    
          {/* Réseaux sociaux desktop */}
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <Link
              to="https://www.linkedin.com/in/david-amelin-68123265/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.79v2.16h.07c.67-1.26 2.3-2.59 4.73-2.59 5.06 0 6 3.33 6 7.66V24h-5v-7.5c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.9 1.95-2.9 3.98V24h-5V8z" />
              </svg>
            </Link>

            {/* GitHub */}
            <Link
              to="https://github.com/Dinid89"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.89.12 3.19.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white md:hidden rounded hover:bg-gray-700 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white md:hidden bg-black text-white px-4 py-4 space-y-4">
          <ul className="flex flex-col space-y-2">
            <li><Link to="" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/Projets" className="hover:text-gray-400">Projets</Link></li>
            <li><Link to="/About" className="hover:text-gray-400">À propos</Link></li>
            <li><Link to="/Contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>

          {/* Réseaux sociaux mobile */}
          <div className="flex space-x-4 mt-4">
            <Link to="https://www.linkedin.com/in/david-amelin-68123265/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              {/* LinkedIn */}
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.79v2.16h.07c.67-1.26 2.3-2.59 4.73-2.59 5.06 0 6 3.33 6 7.66V24h-5v-7.5c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.9 1.95-2.9 3.98V24h-5V8z" />
              </svg>
            </Link>
            <a href="https://github.com/Dinid89" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              {/* GitHub */}
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.89.12 3.19.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;