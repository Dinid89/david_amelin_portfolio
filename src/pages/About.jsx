
import Photo from "../assets/img/photo.jpg";
import AboutSkills from "../components/AboutSkills";

function About() {
  return (
    <>

    <div className="bg-gradient-to-b from-gray-900 to-black p-4 space-y-4 text-white min-h-screen flex flex-col">
    
    <div>
        <h1 className="text-4xl font-bold mb-4 text-center">A propos</h1>
    </div>

    <br />

    <div className="flex flex-col md:flex-row items-center">
    {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={Photo}
              alt="David"
              className="w-64 md:w-80 h-auto rounded-full"
            />
          </div>
    
          {/* Texte */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 rounded-lg">
            <h2 className="text-center text-2xl font-bold mb-4"></h2>
            <p className="text-gray-300 mb-4">
              Hello! I'm David, a passionate web developer with a knack for creating dynamic and responsive websites. 
              With a background in computer science and a love for coding, 
              I specialize in front-end development using technologies like 
              HTML, CSS, JavaScript, and React. I enjoy turning complex problems into simple, 
              beautiful, and intuitive designs. When I'm not coding, you can find me exploring new technologies 
              or working on personal projects to further hone my skills.
            </p>
            </div>
            </div>
            <br />  

    <AboutSkills />       
    

    </div>

    </>


  );
}

export default About;