import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact-me', text: 'connect' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Solid foundation in HTML and CSS for structuring and styling web content. Proficient in responsive web design, CSS pre-processors like sass, and modern layout techniques.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Strong JavaScript skills with a focus on ES6+ features and best practices.',
  },
  {
    id: nanoid(),
    title: 'ReactJs',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in building dynamic and interactive web applications with React.js',
  },
  {
    id: nanoid(),
    title: 'NextJs',
    // icon: <TbBrandNextjs className='h-16 w-16 text-emerald-500' />,
    text: 'Familiar with Next.js for server-side rendering and building React applications. Proficient in routing, data fetching, and API integration with Next.js',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    // icon: <img src={mongodbIcon} className="h-16 w-16 text-emerald-500"></img>,
    text: 'Skilled in data modeling, indexing, and querying using MongoDB',
  },
  {
    id: nanoid(),
    title: 'GraphQL',
    // icon: <FaNextjs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient knowledge of schema design, resolver functions, and data manipulation in GraphQL.',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    // icon: <FaNextjs className='h-16 w-16 text-emerald-500' />,
    text: 'Strong knowledge of Bootstrap for building responsive and visually appealing websites',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    // icon: <FaNextjs className='h-16 w-16 text-emerald-500' />,
    text: 'Familiar in integrating TypeScript with JavaScript and popular frameworks.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    // icon: <FaNextjs className='h-16 w-16 text-emerald-500' />,
    text: 'Familiar with Tailwind CSS for utility-first CSS framework',
  },
  {
    id: nanoid(),
    title: 'Rust',
    // icon: <FaNextjs className='h-16 w-16 text-emerald-500' />,
    text: 'Familiar in the Rust programming language',
  },
  // {
  //   id: nanoid(),
  //   title: 'Other skills',
  //   // icon: <FaNextjs className='h-16 w-16 text-emerald-500' />,
  //   text: 'Among other skills, I am enhancing my knowledge in blockchain, web3, substrate, smart contracts, and FRAME.',
  // },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];

export const experiences = [
  {
    id: nanoid(),
    title: "Software Engineer",
    company: "TeamClass",
    location:"Full remote",
    date: "Jun 2021 – Present",
    description: "In my role, I've been dedicated to driving automation and optimization initiatives, resulting in process improvements for the operations team, boosting efficiency and productivity. Additionally, I have been part of the migration and update of our web platform, guaranteeing a smooth transition to newer versions while safeguarding the user experience and functionality. My responsibilities extended to database management, where I successfully designed and implemented functions to enhance data integrity and system performance. I've also been actively involved in researching and integrating external APIs into our platform, enriching it with essential functionalities. Also, I've provided technical support, troubleshooting software issues, and ensuring a stable and reliable environment for our users."
  },
  {
    id: nanoid(),
    title: "Developer Trainee",
    company: "Tata Consultancy Services",
    location:"Remote",
    date: "Apr 2021 – Jun 2021",
    description: "Engaged in a comprehensive learning program to acquire the necessary programming languages and tools for upcoming projects.Applied knowledge through hands-on experience with internal mini-projects, reinforcing concepts gleaned from lectures to gaine familiarity with languages such as Java, frameworks like Angular, and databases like SQL."
  },
  {
    id: nanoid(),
    title: "Internship",
    company: "Tributi",
    location:"Remote",
    date: "Jan 2021 – Mar 2021",
    description: "Engaged in defining the functionality of the Back-end and API.Automated the extraction of data from spreadsheets, converting it into a valid SQL format, resulting in a time-saving of over 80%. Assisted in the design and development of the webpage using React."
  },
];
