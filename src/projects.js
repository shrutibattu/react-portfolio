import calculator from "./images/calculator";
import game from "./images/game";
import punkapi from "./images/punkapi";
import scimx from "./images/scimx";
import todo from "./images/todo";
import translator from "./images/translator";

export const projectsArr = [
  {
    title: "Calculator",
    subtitle: "HTML & JavaScript",
    description: "A simple Calculator built with HTML CSS and JavaScript.",
    image: calculator,
    link: "https://github.com/shrutibattu/Calculator",
  },
  {
    title: "Memory-Card-Game",
    subtitle: "HTML CSS JavaScript",
    description:
      "Game built with HTML & Javascript featuring flip-style card animated with CSS ",
    image: game,
    link: "https://github.com/shrutibattu/Memory-card-game",
  },
  {
    title: "Punk API Project",
    subtitle: "Rest APIs React Hooks & Search",
    description:
      "A React App featuring information about Punk Beer with search functionality. ",
    image: punkapi,
    link: "https://github.com/shrutibattu/punkapi-app",
  },
  {
    title: "Sci-mx Project",
    subtitle: "Client project",
    description:
      "This Project was _nology client project built in React and Firebase.I worked on the timer and the product preferences page",
    image: scimx,
    link: "https://github.com/nology-tech/sci-mx",
  },
  {
    title: "Translator Project",
    subtitle: "TDD based project",
    description: "This project traslates English alaphabet into Morse code.",
    image: translator,
    link: "https://github.com/shrutibattu/Translator",
  },
  {
    title: "Todo-list-App Project",
    subtitle: "Full Stack Project",
    description: "This full Stack project is built using React and Java ",
    image: todo,
    link: "https://github.com/shrutibattu/todo-list-app",
  },
];

// function createProject(name, subTitle, description, image, url) {
//   const project = {
//     title: name,
//     subtitle: subTitle,
//     description: description,
//     image: image,
//     link: url,
//   };

//   return project;
// }

// function makeNewProject() {
//   projectsArr.push(
//     createProject(
//       "Calculator",
//       "HTML & JavaScript",
//       "./images/calculator",
//       "https://github.com/shrutibattu/Calculator"
//     )
//   );
//   projectsArr.push(
//     createProject(
//       "Memory-Card-Game",
//       "HTML CSS JavaScript",
//       "/Users/shrutibattu/development/react-portfolio/src/images/Memory-game",
//       "https://github.com/shrutibattu/Memory-card-game"
//     )
//   );
//   projectsArr.push(
//     createProject(
//       "Punk API Project",
//       "Rest APIs React Hooks & Search",
//       "/Users/shrutibattu/development/react-portfolio/src/images/punkapi",
//       "https://github.com/shrutibattu/punkapi-app"
//     )
//   );
// }

// makeNewProject();

// console.log(projectsArr);
