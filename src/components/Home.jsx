import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#fff]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#1D7F56]">
          Bienvenido, Somos De tú a ti
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#4FECA5]">
          Introducir un subtitulo
        </h2>
        <p className="text-[#6F6F6F] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta autem
          dignissimos quo expedita, pariatur reprehenderit ipsum? Asperiores,
          quas suscipit! Quasi inventore quidem unde odit adipisci deserunt,
          magni animi fugit placeat.
        </p>
        <div>
          <button className="text-black border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4FECA5] hover:border-[#4FECA5]">
            Contacto
            <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
