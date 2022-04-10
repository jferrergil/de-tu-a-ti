import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#D5EAD8] text-[#1D7F56]">
      <div>
        <img src={logo1} alt="logo" className="h-12 cursor-pointer" />
      </div>
      {/*menu*/}

      <ul className="hidden md:flex">
        <li>Acompañamiento terapéutico</li>
        <li>Quienes somos</li>
        <li>Nuestra filosofía</li>
        <li>Contacta</li>
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
        <li className="py-6 text-4xl">Acompañamiento terapéutico</li>
        <li className="py-6 text-4xl">Quienes somos</li>
        <li className="py-6 text-4xl">Nuestra filosofía</li>
        <li className="py-6 text-4xl">Contacta</li>
      </ul>

      {/*Social Media*/}
      <div className="flex fixed flex-col top-[35%] left-0"></div>
    </div>
  );
};

export default Navbar;
