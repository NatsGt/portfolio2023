export enum ContactName {
  GITHUB = "github",
  LINKEDIN = "linkedin",
  MAIL = "mail",
}

export type Contacts = {
  id: number
  name: ContactName
  value: string
  description: string
}

type Skills = {
  id: number
  name: string
}

type Projects = {
  id: number
  title: string
  description: string
  img: string
  code: string
  preview: string
}

type MyData = {
  name: string
  location: string
  briefDescription: string
  aboutMe: string
  skillsDescription: string
  contactSummary: string
  contact: Contacts[]
  skills: Skills[]
  projectsSummary: string
  projects: Projects[]
}

const data: MyData = {
  name: "Natalia Rodas",
  location: "Sydhavn, Copenhaguen, Denmark",
  briefDescription:
    "I’m a Front End Developer based in Copenhaguen, Denmark. I’m passionate about web development, technology, and coding. I have a slight obsession with logic and challenges. ",
  aboutMe:
    "I am a highly curious and cheerful person with a strong enthusiasm for technology and coding. I began my journey in web development through self-study and eventually received professional certification. My love for programming and staying current with new technology led me to pursue a Master's degree in Software Design at ITU, where I hope to gain a deeper understanding of the IT field.",
  skillsDescription:
    "I started as a self-taught developer on several online platforms and built some basic projects (cloning responsive websites). Afterward, I got into the Hack Your Future program where I got my Front End Developer certificate. Since then, I’ve been working with projects based on Javascript, NodeJs, React, MySql, KnexJs, Git, Sass, Redux, and other several libraries. I'm always looking for new projects that help me dig more into these technologies and I'm looking forward to new and challenges.",
  contactSummary:
    "Hey! you just met me, and this is crazy, so here's my contact, so write me... maybe?",
  contact: [
    {
      id: 1,
      name: ContactName.MAIL,
      value: "mailto:nataliarodas7858@gmail.com",
      description: "Write me at nataliarodas7858@gmail.com",
    },
    {
      id: 2,
      name: ContactName.LINKEDIN,
      value: "https://www.linkedin.com/in/natalia-rodas-926523134/",
      description: "Read more about my professional track.",
    },
    {
      id: 3,
      name: ContactName.GITHUB,
      value: "https://github.com/NatsGt",
      description: "See some of my projects",
    },
  ],
  skills: [
    {
      id: 1,
      name: "Html",
    },
    { id: 2, name: "Css" },
    { id: 3, name: "Sass" },
    {
      id: 4,
      name: "Typescript",
    },
    {
      id: 5,
      name: "Javascript (ES6)",
    },
    {
      id: 6,
      name: "NodeJs",
    },
    {
      id: 7,
      name: "MySql",
    },
    {
      id: 8,
      name: "React",
    },
    {
      id: 9,
      name: "GitHub",
    },
    {
      id: 10,
      name: "Redux",
    },
  ],
  projectsSummary:
    "These are some of the projects that I have been working on. Click on the card to see the code behind it or hover over it to see a giph showing how the website looks.",
  projects: [
    {
      id: 1,
      title: "Clone Website",
      description:
        "This project was based on pure HTML and CSS. It's a responsive website with diverse image positioning, buttons, a form, and other components that are styled without any library. The design and original template can be found here.",
      img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      code: "https://github.com/NatsGt/clone-travel-app",
      preview: "https://natsgt.github.io/clone-travel-app/",
    },
    {
      id: 2,
      title: "GitHub Search",
      description:
        "This is a pretty basic search website for GitHub users based on React. It fetches data from a GitHub API, passes it through components using React hooks, and handles errors that the API may throw.",
      img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      code: "https://github.com/NatsGt/hyf-homework/tree/master/react/week4",
      preview: "https://i.imgur.com/1A8ZJqI.gif",
    },
    {
      id: 3,
      title: "MealSharing App",
      description:
        "This project consists on the use of several tools, such as React, NodeJs, MySql, KnexJs, and Bootstrap. It's a project that uses CRUD concepts, fetching information from a database, and using React-Bootstrap for the styling.",
      img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      code: "https://github.com/NatsGt/meal-sharing",
      preview: "https://github.com/NatsGt/meal-sharing",
    },
  ],
}
export default data
