import React, { useEffect, useState } from "react";
import { HeaderLinks } from "../constants/navLinks";
import { Link, NavLink } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-fit flex items-center z-50 transition-all duration-300 
        backdrop-blur-md ${
          isScrolled
            ? "bg-white text-gray-500 shadow-md"
            : "bg-transparent text-white"
        }`}
    >
      <div className="max-w-screen-xl mx-auto mt-0 w-full px-4 py-4 flex justify-between items-center">
        {/* logo */}
        <div className="logo ">
          <img
            src="https://hexagroup.ae/wp-content/uploads/2024/03/cropped-cropped-HEXA-LOGO-new.pdf.png"
            alt="logo"
            className={`transition-all duration-300  ${
              isScrolled ? "md:h-16 h-12 w-auto" : "md:h-20 h-16 w-auto"
            }`}
          />
        </div>

        {/* Desktop nav */}

        <div className=" hidden lg:flex  ">
          <nav className="w-fit h-fit flex flex-row items-center ">
            {HeaderLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-semibold uppercase py-1 px-4 hover:text-shadow-xs hover:text-shadow-current transition-all duration-300 ${
                    isScrolled ? "text-gray-700" : "text-red-600"
                  } ${isActive ? "bg-red-500 text-white " : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile nav button */}
        <div className="lg:hidden border-2 border-gray-400 aspect-square rounded-full  overflow-hidden relative group ">
          <div className="absolute inset-0 bg-gray-400 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 origin-center"></div>

          <button
            onClick={() => handleMenuClick()}
            className={`text-gray-400 group-hover:text-white p-2 transition-transform duration-400 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
