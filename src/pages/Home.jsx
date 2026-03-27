import { Link } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";
import HomeProjects from "../components/HomeProjects";

function Home() {
  return (
    <>
     <HomeBanner />
     <HomeAbout />
     <HomeProjects />
    </>
  );
}

export default Home;