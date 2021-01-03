// interface Props {
//   text: string;
//   fn?: () => void;
//   ok: boolean;
//   counter: number;
//   person: Person;
// }

import { Fragment } from "react";
import ProfileImage from "../../assets/redxzeta.JPG";
import ArqiveMobile from "../../assets/projects/senior/senior-mobile.gif";
import Daikoku from "../../assets/projects/freelance/Daikoku.png";
interface SectionProps {
  children: React.ReactNode;
  sectionStyling?: string;
}

export const LandingPage: React.FC = () => {
  return (
    <Fragment>
      <GreetingSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectSection />
    </Fragment>
  );
};

const ProjectSection: React.FC = () => (
  <SectionLayer sectionStyling="projects">
    <h1>Projects</h1>
    <article>
      <h3>The arQive - Senior Project</h3>
      <img src={ArqiveMobile} alt="arqive" />
      <p>
        The arqive is a social media website for the LGBTQ+ community. It
        provides users with a safe platform to share their stories and
        experiences. The arqive allows people to post location-based pins that
        link stories to areas on the world map. Stories can be categorized as
        Personal, Resources, or Historical
      </p>
      <p>
        The frontend used React and the backend used Django Rest. It was
        deployed on Digital Ocean May 2020. It uses an open source library
        called leaflet for displaying map features.
      </p>
    </article>
    <article>
      <h3>Daikoku Foods - Freelance</h3>
      <img src={Daikoku} alt="daikoku" />
      <p>
        The arqive is a social media website for the LGBTQ+ community. It
        provides users with a safe platform to share their stories and
        experiences. The arqive allows people to post location-based pins that
        link stories to areas on the world map. Stories can be categorized as
        Personal, Resources, or Historical
      </p>
      <p>
        The frontend used React and the backend used Django Rest. It was
        deployed on Digital Ocean May 2020. It uses an open source library
        called leaflet for displaying map features.
      </p>
    </article>
    <article>
      <h3>Pawternity Hub - Hackathon</h3>
      <img src={ArqiveMobile} alt="arqive" />
      <p>
        A pet adoption information website built with React using the Pet Finder
        API.
      </p>
    </article>
  </SectionLayer>
);

const ExperienceSection: React.FC = () => (
  <SectionLayer>
    <h1>Experience</h1>
    <div>
      <h3>Njiko</h3>
      <p>Role: Software Engineer Volunteer</p>
      <p>Duration: July 2020 - Current</p>
      <p>Responsiblities</p>
    </div>
    <div>
      <h3>Win-Kel</h3>
      <p>Role: Web Developer Intern</p>
      <p>Duration: March 2020 - August 2020</p>
      <p>Responsiblities</p>
    </div>
  </SectionLayer>
);

const EducationSection: React.FC = () => (
  <SectionLayer>
    <h1>Education</h1>
    <p>School: California State University, Los Angeles</p>
    <p>Major: Computer Science</p>
    <p>Years Attended: August 2016 - May 2020</p>
    <p>
      Related Coursework: Data Structures, Algorithms, Database, Machine
      Learning, Statistics, Web Development, Operating Systems, Robotics
    </p>
  </SectionLayer>
);
const GreetingSection: React.FC = () => {
  return (
    <SectionLayer sectionStyling="greetings">
      <img src={ProfileImage} alt="Suarez" />
      <div className="greetings--pargraph">
        <h1>Greetings!</h1>
        <p>My name is Nathaniel Suarez.</p>
        <p>I am a Junior Software Engineer.</p>
      </div>
    </SectionLayer>
  );
};

const AboutSection: React.FC = () => (
  <SectionLayer sectionStyling="about">
    <h1>About Me</h1>
    <p>
      I graduated from California State University, Los Angeles with a Bachelor
      degree in Computer Science in May 2020.
    </p>
    <p>
      My inspriation to focus on Software Engineering and Web Development came
      from attending the Twitch Hackathon 2019 at San Diego where I built a
      Twitch Extension using React.
    </p>
  </SectionLayer>
);

const SectionLayer: React.FC<SectionProps> = ({ children, sectionStyling }) => (
  <section className={sectionStyling}>{children}</section>
);
