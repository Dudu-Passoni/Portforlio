import Menu from './components/Menu'
import './app.css'
import Introduction from './components/Introduction';
import Heading from './components/Heading';
import ProjectCard from './components/ProjectCard';
import Skill from './components/Skill';
import Footer from './components/Footer';

import { SiReact } from "react-icons/si";
import { AiFillHtml5 as HTML } from "react-icons/ai";
import { DiCss3 as CSS } from "react-icons/di";
import { IoLogoJavascript as JS } from "react-icons/io";
import { SiC as C } from "react-icons/si";


function App() {
  return (
    <main>
      <header className="light-bg">
        <div className="container">
          <Menu />
        </div>
      </header>

      <section className="container section">
        <Introduction />
      </section>

      <section className="section light-bg">
        <Heading id="projects">
          Projects
        </Heading>
      <div className="container projects-container">
        <ProjectCard 
          title="Empty project"
          description="The future guards great things"
        />
        <ProjectCard 
          title="Empty project"
          description="The future guards great things"
        />
        <ProjectCard 
          title="Empty project"
          description="The future guards great things"
        />
        <ProjectCard 
          title="Empty project"
          description="The future guards great things"
        />
        <ProjectCard 
          title="Empty project"
          description="The future guards great things"
        />
        <ProjectCard 
          title="Empty project"
          description="The future guards great things"
        />
      </div>
      </section>

      <section className="section light-bg">
        <Heading id="skills">Skills</Heading>
        <div className="container skills-container">
          <Skill title="React">
            <SiReact size={70} color="#650080" />
          </Skill>
          <Skill title="HTML">
            <HTML size={70} color="#650080" />
          </Skill>
          <Skill title="CSS">
            <CSS size={70} color="#650080" />
          </Skill>
          <Skill title="JavaScrypt">
            <JS size={70} color="#650080" />
          </Skill>
          <Skill title="C">
            <C size={70} color="#650080" />
          </Skill>
        </div>
      </section>
        <section className="section">
          <div className="container">
            <Footer />
          </div>
        </section>


    </main>
  );
}

export default App;
