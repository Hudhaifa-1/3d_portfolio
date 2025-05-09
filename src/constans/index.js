import {
  mobile,
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
  vue,
  khmsat,
  rhodium,
  mostaql,
  book,
  tabeb,
  hudhaifa,
  company_website,
  seasons_4,
  runhill_website,
  chair,
  pinia,
  Ahmed_hani,
  bakeet,
  bakeet_website,
  quran_player,
  mern_ecommerce,
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
    title: "Web Developer",
    company_name: "Bakeet",
    icon: bakeet_website,
    iconBg: "#3722a1",
    date: "Dec 2022 - Present",
    points: [
      "I developed many websites and applications in the field of the web and gained valuable experiences.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "My latest work with this company is Bakeet web application.",
    ],
  },
  {
    title: "Dart Developer",
    company_name: "Rhodium",
    icon: rhodium,
    iconBg: "#050816",
    date: "Dec 2022 - May 2023",
    points: [
      "I worked for this company as a mobile application developer",
      "I worked on more than one application, including them Social Cube and Xenon.",
      "I learned a lot in a short period of time about the world of mobile application development.",
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
];

const testimonials = [
  {
    testimonial:
      "As a student, Hudhaifa was hardworking and dedicated and has actively set herself up for a very promising profession in his field.",
    name: "Tome",
    designation: "Dr at ",
    company: "AL-Nahrain University",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    testimonial:
      "It is difficult to find someone who is quick to learn and implement like you. Hudhaifa  you have a fancy future waiting for you",
    name: "Ibrahem H.",
    designation: "PM at ",
    company: "Bakeet",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "حذيفة ولد شكاكي",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/men/10.jpg",
  // },
];

const projects = [
  {
    name: "E-Commerce Store",
    description:
      "🛍️ MERN E-Commerce Store A full-stack e-commerce app built with the MERN stack. It features user authentication, admin dashboard, product browsing by category, shopping cart, and order management. Simple, fast, and responsive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "text-yellow-600",
      },
    ],
    image: mern_ecommerce,
    source_code_link: "https://github.com/Hudhaifa-1/mern-ecommerce-store",
  },
  {
    name: "Quran player",
    description:
      "Developed an intuitive and aesthetically pleasing Quran Player web application using modern front-end technologies. The platform offers a seamless audio streaming experience with a clean UI, interactive controls, and responsive design. Designed for accessibility and ease of use.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "text-purple-600",
      },
      {
        name: "tailwind",
        color: "text-yellow-600",
      },
    ],
    image: quran_player,
    source_code_link: "https://hudhaifa-1.github.io/Quran_Player/",
  },
  {
    name: "4 Seasons",
    description:
      "Developed a professional website for 4 Seasons Company using HTML, CSS. The site features a modern design with responsive layouts and interactive elements, highlighting the company's diverse services in catering, logistics, and facility management. Designed to provide an intuitive user experience.",
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
        name: "tailwind",
        color: "text-yellow-600",
      },
    ],
    image: seasons_4,
    source_code_link: "https://hudhaifa-1.github.io/4_Seasons/index.html",
  },
  {
    name: "Bakeet",
    description:
      "Developed a dynamic and visually appealing landing page for the Bakeet e-commerce platform using modern web technologies. The design emphasizes a smooth user experience with engaging UI elements, responsive layouts, and strategic call-to-action buttons for app downloads.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "text-purple-600",
      },
      {
        name: "tailwind",
        color: "text-yellow-600",
      },
    ],
    image: bakeet,
    source_code_link: "https://bakeet.shop/",
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
];

export { services, technologies, experiences, testimonials, projects };
