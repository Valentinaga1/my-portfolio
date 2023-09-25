import heroImg from "../assets/hero.svg";
import mySelf from "../assets/valentinaga1.jpg";

import  { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaFilePdf  } from "react-icons/fa";

const Hero = () => {
  const cvUrl = "src/assets/Cv-ValentinaGómezAgudelo.pdf";

  return (
  <div className="bg-emerald-100 py-28">
    <div className="align-element px-8 grid  md:grid-cols-2 items-center gap-8">
      <article>
        <h1 className="text-7xl font-bold tracking-wider">
          Hey, Valentina here!
        </h1>
        <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
          Full Stack / Blockchain Developer
        </p>  
        <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
          I am currently a full stack web developer and blockchain developer entusiastic!
        </p>
        <div className="flex gap-x-4 mt-4">
          {/* <a href="https://github.com/Valentinaga1" target="_blank" rel="noreferrer">
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/valentinaga1/" target="_blank" rel="noreferrer">
            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="https://twitter.com/valengomeza" target="_blank" rel="noreferrer">
            <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a> */}
          {/* <a href={cvUrl} download="Cv-ValentinaGómezAgudelo.pdf" title="CV">
            <FaFilePdf className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a> */}
        </div>
      </article>
      <article className="hidden md:block">
        <img src={mySelf} className="h-80 lg:h-96  rounded-full"></img>
      </article>
    </div>
  </div>
  )
}

export default Hero