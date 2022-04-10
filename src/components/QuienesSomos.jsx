import React from "react";

const QuienesSomos = () => {
  return (
    <div
      name="quienesSomos"
      className="w-full h-screen bg-[#fff] text-[#6F6F6F]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#4FECA5]">
              Quienes somos
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Aquí una breve explicación</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur provident eius amet qui dolor temporibus facilis?
              Maxime, qui deserunt, nemo vel porro, voluptatibus facilis tempora
              architecto explicabo nisi dolorum perferendis?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, magnam voluptate sint rerum, mollitia pariatur in corrupti ea soluta ipsum iusto, temporibus error. Necessitatibus, eveniet maiores sint quis quod nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
