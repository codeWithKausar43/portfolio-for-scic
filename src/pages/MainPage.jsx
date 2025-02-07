import { useState } from "react";
import Button from "../components/shared/Button";
import { Link } from "react-router-dom";
import logo from "../assets/images/plogo.png";
import "animate.css";
function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-section bg-gradient-to-b from-[#122E43]  to-[#122E43] bg-opacity-50 shadow-xl  border-b border-white fixed top-0 left-0 w-full z-50">
      <nav
        id="menu-navbar"
        className="lg:max-w-[1100px] mx-auto text-white flex justify-between items-center py-6"
      >
        <div className="font-bold text-xl size-12 rounded-full overflow-hidden">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover animate__animated animate__bounce"
          />
        </div>

        <div className="hidden md:flex space-x-4 justify-center items-center">
          <Link to={"/"} className="hover:text-gray-400 text-sm">
            Home
          </Link>
          <Link to={"#about"} className="hover:text-gray-400 text-sm">
            About
          </Link>
          <Link to={"myTechnologies"} className="hover:text-gray-400 text-sm">
            Tech Stack
          </Link>
          <Link to={"#projects"} className="hover:text-gray-400 text-sm">
            Projects
          </Link>
          <Link to="https://drive.google.com/file/d/1yNnaKFAjmfMIwXY4Q0fOOA_0_DvCg-KF/view?usp=sharing" target="_blank">
          <Button
            text="Resume"
            bg="bg-[#00e676]"
            size="px-6 py-2"
            textColor="text-white"
          />
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />

          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full z-10 bg-black text-white md:hidden">
            <div className="flex flex-col items-center gap-5 py-5 px-4">
              <Link to={"/"} className="hover:text-gray-400">
                Home
              </Link>
              <Link to={"/myTechnologies"} className="hover:text-gray-400 text-sm">
            Tech Stack
          </Link>
          <Link to="https://drive.google.com/file/d/1yNnaKFAjmfMIwXY4Q0fOOA_0_DvCg-KF/view?usp=sharing">
          
          <a
                href="#contact"
                className="bg-transparent border border-white rounded-md px-4 py-2 hover:bg-white w-fit hover:text-black transition duration-300"
              >
              Download Resume
              </a>
          </Link>

            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default MainPage;
