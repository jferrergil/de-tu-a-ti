import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../assets/logo2.png";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full">
      <div className=" w-full h-[30px] flex justify-between items-center px-4 bg-[#1D7F56] text-white">
        <dl className="hidden md:flex gap-12">
          <dt>Telefono de contacto</dt>
          <dt>correo electronico</dt>
          <dt>calle del local</dt>
        </dl>
        
      </div>

      <div className=" w-full h-[80px] flex justify-between items-center px-4 bg-[white] text-[#1D7F56]">
        <div>
          <Link to="home" smooth={true} duration={500}>
            <img src={logo1} alt="logo" className="h-12 cursor-pointer" />
          </Link>
        </div>
        {/*menu*/}

        <ul className="hidden md:flex">
          <li>
            <Link to="acompañamiento" smooth={true} duration={500}>
              Acopañamiento terapéutico
            </Link>
          </li>
          <li>
            <Link to="quienesSomos" smooth={true} duration={500}>
              Quienes somos
            </Link>
          </li>
          <li>
            {" "}
            <Link to="filosofia" smooth={true} duration={500}>
              Nuestra filosofía
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contacta
            </Link>
          </li>
        </ul>

        {/*Hamburguesa*/}
        <div onClick={handleClick} className="md:hidden z-10">
          {!isOpen ? <FaBars /> : <FaTimes />}
        </div>

        {/*Movil Menu*/}
        <ul
          className={
            !isOpen
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#D5EAD8] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="acompañamiento"
              smooth={true}
              duration={500}
            >
              Acopañamiento terapéutico
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="quienesSomos"
              smooth={true}
              duration={500}
            >
              Quienes somos
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="filosofia"
              smooth={true}
              duration={500}
            >
              Nuestra filosofía
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contacta
            </Link>
          </li>
        </ul>

        {/*Social Media*/}
        <div className="flex fixed flex-col top-[35%] left-0"></div>
      </div>
    </div>
  );
};

export default Navbar;
