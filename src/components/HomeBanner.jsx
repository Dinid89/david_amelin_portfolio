import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png"; // ton image si tu veux l'utiliser

function HomeBanner() {
    return (

        <>
         {/* Hero section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-4 md:px-20">
        {/* Texte */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl  md:text-6xl font-bold mb-6">
            Bonjour, moi c’est David
          </h1>
          <br />
          <p className="text-gray-400 text-lg mb-8">
            Développeur web passionné, je crée des expériences modernes et performantes.
          </p>
          <Link to="/Projets">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 border border-blue transition">
              Voir mes projets
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src={heroImg} alt="Hero" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>
        </>

    );
}

export default HomeBanner;