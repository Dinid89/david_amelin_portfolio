import { Link } from "react-router-dom";
import Photo from "../assets/img/photo.jpg";

function HomeAbout() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white flex flex-col md:flex-row items-center justify-center p-8">
      
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={Photo}
          alt="David"
          className="w-64 md:w-80 h-auto rounded-full"
        />
      </div>

      {/* Texte */}
      <div className="w-full md:w-1/2 flex flex-col justify-center border-2 border-gray-700 p-6 rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-4">A propos</h2>
        <p className="text-gray-300 mb-4">
          Hello! I'm David, a passionate web developer with a knack for creating dynamic and responsive websites. 
          With a background in computer science and a love for coding, 
          I specialize in front-end development using technologies like 
          HTML, CSS, JavaScript, and React. I enjoy turning complex problems into simple, 
          beautiful, and intuitive designs. When I'm not coding, you can find me exploring new technologies 
          or working on personal projects to further hone my skills.
        </p>

        <button className="bg-blue-500 text-white px-6  py-3 rounded-full font-semibold hover:bg-blue-600 border border-blue transition w-max self-center">
          <Link to="/About" className="text-white no-underline">En savoir plus ?</Link>    
        </button>
      </div>

    </div>
  );
}

export default HomeAbout;