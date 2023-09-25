import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section className="bg-white py-20" id="contact-me">
      <div className="align-element px-8 grid md:grid-cols-2 items-center gap-8">
        <h2 className="text-4xl font-bold tracking-wider">Let´s connect!</h2>
        <div className="flex gap-x-4 mt-4">
          <a href="https://github.com/Valentinaga1" target="_blank" rel="noreferrer">
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/valentinaga1/" target="_blank" rel="noreferrer">
            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="https://twitter.com/valengomeza" target="_blank" rel="noreferrer">
            <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="mailto:valentinagoa2@gmail.com">
            <FaEnvelope className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
        <div>
          <p className="text-slate-600 leading-loose">Phone: +57 321 867 2795</p>
          <p className="text-slate-600 leading-loose">Email: valentinagoa2@gmail.com</p>
          <p className="text-slate-600 leading-loose">Based in: Medellín, Colombia</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;