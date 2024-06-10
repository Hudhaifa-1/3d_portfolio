import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  flutter,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  bootstrap,
  vuetify,
  laravel,
  nodejs,
  mysql,
  git,
  vue,
  khmsat,
  HSA2,
  rhodium,
  mostaql,
  book,
  tabeb,
  hudhaifa,
  company_website,
  runhill_website,
  chair,
  pinia,
  Ahmed_hani,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-stack Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Computer Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Pinia",
    icon: pinia,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Vuetify",
    icon: vuetify,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },

  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front-end web Developer",
    company_name: "Khamsat",
    icon: khmsat,
    iconBg: "#383E56",
    date: "Nov 2021 - Dec 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end web Developer",
    company_name: "Mostaql",
    icon: mostaql,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Developing web applications using Vue.js and other related technologies.",
      "Gained tremendous experience in how to deal with customers.",
    ],
  },
  {
    title: "Dart Developer",
    company_name: "Rhodium",
    icon: rhodium,
    iconBg: "#050816",
    date: "Dec 2022 - May 2023",
    points: [
      "I worked for this company as a mobile application developerز",
      "I worked on more than one application, including them Social Cube and Xenon.",
      "I learned a lot in a short period of time about the world of mobile application development.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Hhodium",
    icon: rhodium,
    iconBg: "#3722a1",
    date: "Dec 2022 - Present",
    points: [
      "I developed many websites and applications in the field of the web and gained valuable experiences.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "My latest work with this company is Bakeet web application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "As a student, Hudhaifa was hardworking and dedicated and has actively set herself up for a very promising profession in his field.",
    name: "Ahmed Hani",
    designation: "Dr at ",
    company: "AL-Nahrain University",
    image: Ahmed_hani,
  },
  {
    testimonial:
      "It is difficult to find someone who is quick to learn and implement like you. Hudhaifa  you have a fancy future waiting for you",
    name: "Muhammad H.",
    designation: "PM at ",
    company: "HSA",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "حذيفة ولد شكاكي",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "A simple old portfolio with some transitions there , dark mode and responsive web design. I love it alot, But I wanted to make my portfolio with new technology ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: hudhaifa,
    source_code_link: "https://hudhaifa.vercel.app/",
  },
  {
    name: "Book Store",
    description:
      "Web-based platform that allows users to search for books they need , and if they like it , there are such discount for every book in library.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://hudhaifa-1.github.io/Library/",
  },
  {
    name: "Tabeb",
    description:
      "Web application that enables users to search for Doctors, Clinics, Hospitals and All medical specialties, Also the places they meet and their numbers are in the application.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "vuetify",
        color: "pink-text-gradient",
      },
    ],
    image: tabeb,
    source_code_link: "https://tabeb-1.vercel.app/",
  },
  {
    name: "Runhill company",
    description:
      "I developed a versatile and responsive website for Runhill Company using HTML, CSS, and JavaScript. The site is optimized for both mobile and desktop users, featuring smooth transitions and showcasing customer testimonials to enhance user engagement and credibility.Focused on delivering a seamless user experience across all devices.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: runhill_website,
    source_code_link: "https://hudhaifa-1.github.io/Company-website/",
  },
  {
    name: "Chair Shop",
    description:
      "An online store for selling chairs, with the addition of discounts from time to time for some brands, it contains beautiful transitions, but make sure to open the site with your laptop because unfortunately it is not responsive to the phone, simply because I created it in the first month of my start to develop websites.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "desktop-only",
        color: "text-yellow-600",
      },
    ],
    image: chair,
    source_code_link: "https://hudhaifa-1.github.io/Chair-shop/",
  },
  {
    name: "Agecy company",
    description:
      "Developed a visually engaging website for Agency Company using HTML, CSS, and JavaScript. The site features advanced CSS transitions and hover effects to create an interactive user experience. It is designed specifically for desktop users, showcasing intricate design elements , hovers and animations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "desktop-only",
        color: "text-yellow-600",
      },
    ],
    image: company_website,
    source_code_link: "https://hudhaifa-1.github.io/Company/",
  },
];

export { services, technologies, experiences, testimonials, projects };
