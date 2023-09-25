import { useEffect, useState } from "react";
import { links } from "../data"
import mySelf from "../assets/valentinaga1.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-emerald-100 w-full transition-transform fixed top-0 ${
        scrolled ? 'transform scale-105' : ''
      }`}
    >
      <div className="align-element px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <div className={`h-10 w-10 ml-4 ${scrolled ? 'block' : 'hidden'}`}>
          <img
            src={mySelf}
            alt="Small Image"
            className="rounded-full"
          />
        </div>
        <h2 className="text-3xl font-bold">
          Software / Blockchain <span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map(link => {
            const { id, href, text } = link;
            return (
              <a key={id} href={href} className="capitalize text-lg tracking-wider hover:text-emerald-600 duration-300">
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;