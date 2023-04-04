import { link } from "fs"

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

export type Skills = {
  id: number
  name: string
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
  projects: Project[]
}

type ProjectLink = {
  id: number
  type: "url" | "repository"
  link: string
}

export type Project = {
  id: number
  title: string
  description: string
  links: ProjectLink[]
  technologies: Skill[]
  inProgress?: boolean
  image: string
}

export enum Skill {
  HTML = "html",
  CSS = "css",
  SASS = "sass",
  TYPESCRIPT = "typescript",
  JAVASCRIPT = "javascript",
  NODE = "nodejs",
  REACT = "react",
  GITHUB = "github",
  SQL = "sql",
  NEXT = "next",
  REACTNATIVE = "react native",
}

const data: MyData = {
  name: "Natalia Rodas",
  location: "Sydhavn, Copenhaguen, Denmark",
  briefDescription:
    "I'm all about web development, technology, and coding - I could talk about it for hours. And when it comes to logic and challenges, well, let's just say I'm a bit obsessed. Whether it's troubleshooting code or tackling a tricky problem, I'm always up for a good challenge.",
  aboutMe:
    "I'm an enthusiastic, curious, and easygoing person, and I'm also a web developer! I started as a self-taught dev and got a Frontend Developer certificate from Hack Your Future. I fell in love with coding and new technologies, and now I'm studying for a master's in Software Design at ITU. My goal is to become a super knowledgeable IT expert, so that I can make cool stuff and change the world one line of code at a time! Oh, and did I mention my love for pop culture? From classic movies to the latest memes, I'm always in the know.",
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
      name: Skill.HTML,
    },
    { id: 2, name: Skill.CSS },
    { id: 3, name: Skill.SASS },
    {
      id: 4,
      name: Skill.JAVASCRIPT,
    },
    {
      id: 5,
      name: Skill.TYPESCRIPT,
    },
    // {
    //   id: 6,
    //   name: Skill.NODE,
    // },
    {
      id: 7,
      name: Skill.REACT,
    },
    {
      id: 8,
      name: Skill.GITHUB,
    },
    {
      id: 9,
      name: Skill.SQL,
    },
    {
      id: 10,
      name: Skill.NEXT,
    },
  ],
  projectsSummary:
    "These are some of the projects that I have been working on. Click on the card to see the code behind it or hover over it to see a giph showing how the website looks.",
  projects: [
    {
      id: 1,
      title: "Wult's website",
      description:
        "Built responsive website using Next.js, TypeScript, and a CMS. Optimized for performance, scalability, and user experience. Creators can manipulate themes and templates from CMS, and publish real-time updates. Monitored website performance with analytics tools, making sure it was optimized for search engines",
      links: [
        {
          id: 1,
          type: "url",
          link: "https://wult.io/",
        },
      ],
      technologies: [Skill.REACT, Skill.NEXT, Skill.TYPESCRIPT, Skill.SASS],
      image: "/projects/wult_website.png",
    },
    {
      id: 2,
      title: "Wult's platform",
      description:
        "This tool has a data mapping functionality to create a full compliance index of all data, including data structure, segmentation, and more. Utilized React to create a dynamic user interface, and used Sass to simplify the styling process. Utilized Next.js to enable server-side rendering, automatic code splitting, and optimized performance. Used third-party libraries for UI components (Antd), graphs (Recharts), API fetching and updtaing (ReactQuery), and more.",
      links: [
        {
          id: 1,
          type: "url",
          link: "https://wult.io/feature/essential-data-mapping",
        },
      ],
      technologies: [Skill.REACT, Skill.NEXT, Skill.TYPESCRIPT, Skill.SASS],
      image: "/projects/wult_platform.png",
    },
    {
      id: 3,
      title: "Boardgamee",
      description:
        "Mobile app for boardgames saving using React Native, integrating sql database to store games and users. Optimized for performance and compatibility with both iOS and Android devices. Implemented third-party libraries and APIs for games data (Atlas API), user authentication (Firebase), and user experience features (eg. push notifications)",
      links: [
        {
          id: 1,
          type: "repository",
          link: "https://github.com/radoales/boardgamee",
        },
      ],
      technologies: [Skill.REACTNATIVE, Skill.TYPESCRIPT, Skill.CSS, Skill.SQL],
      image: "/projects/boardgamee_2.png",
    },
  ],
}

const oldProjects = [
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
]
export default data
