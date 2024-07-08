import { Helmet } from "react-helmet";
import { headerData } from "../../data/headerData";
import Navbar from "../../components/container/navbar";
import Landing from "../../components/container/landing";
import About from "../../components/core-ui/about/about";
import Experience from "../../components/core-ui/experience/experience";
import ProjectsAchieveContainer from "../../components/container/projectsAchieveContainer";
import Skills from "../../components/core-ui/skills/skills";
import Projects from "../../components/container/projects";
import Education from "../../components/core-ui/education/education";
import Contacts from "../../components/container/contacts";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <ProjectsAchieveContainer />
      <Skills />
      <Projects />
      <Education />
      <Contacts />
    </div>
  );
}

export default HomePage;
