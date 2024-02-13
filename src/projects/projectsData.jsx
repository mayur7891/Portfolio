import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Dall-E clone",
    image: projectOne,
    description: (
      <>
        <p>
          This is full stack project made using MERN stack which is clone of DALL-E AI image generator which is product of OPENAI. 
        </p>
      </>
    ),
    github: "https://github.com/mayur7891/ImageGeneratorDall-E",
    demo: "https://legendary-cajeta-0ad27e.netlify.app/",
  },
  2: {
    title: "Fake News Detection Website",
    image: projectTwo,
    description: (
      <>
        <p>
          This website is developed to provide functionality of fake news detection using ML model. I have worked in team of 4 to build this web. Firebase and flask are used as backend technologies.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "Restaurant Website",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
