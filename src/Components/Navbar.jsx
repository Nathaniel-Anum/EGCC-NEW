// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../assets/channels4_profile.jpg";

const Navbar = ({ theme = "light" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const hamburgerColor = isOpen
    ? "bg-black"
    : theme === "dark"
    ? "bg-white"
    : "bg-black";

  return (
    <>
      <nav
        className={`relative z-40 font-lora font-mozilla-headline flex justify-between items-center px-6 py-4  ${textColor}`}
      >
        <div className="rounded-full overflow-hidden w-[9rem] h-[9rem] max-sm:w-[4rem] max-sm:h-[4rem] md:h-[7rem] md:w-[7rem]">
          <img src={pic} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:hidden md:flex gap-6">
          <Link to="/">
            <li className={`hover:text-yellow-400 cursor-pointer`}>Home</li>
          </Link>
          <Link to="/about">
            <li className={`hover:text-yellow-400 cursor-pointer`}>About</li>
          </Link>
          <Link to="/team">
            <li className={`hover:text-yellow-400 cursor-pointer`}>Our Team</li>
          </Link>
          <Link to="/give">
            <li className={`hover:text-yellow-400 cursor-pointer`}>Give</li>
          </Link>
        </ul>

        {/* Hamburger (turns into X) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 ${hamburgerColor} transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 ${hamburgerColor} transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 ${hamburgerColor} transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        className={`fixed inset-0 md:hidden font-mozilla-headline z-30 bg-white transform transition-transform duration-500 ease-in-out will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="h-full flex flex-col items-center justify-center gap-8 text-black text-2xl font-medium">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:opacity-70"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:opacity-70"
          >
            About
          </Link>
          <Link
            to="/team"
            onClick={() => setIsOpen(false)}
            className="hover:opacity-70"
          >
            Our Team
          </Link>
          <Link
            to="/give"
            onClick={() => setIsOpen(false)}
            className="hover:opacity-70"
          >
            Give
          </Link>
        </nav>
      </div>

      {/* Click-outside overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
