import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-ful h-screen bg-[#fff] flex justify-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 py-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#4FECA5] text-[#1D7F56] ">
            Contacto
          </p>
          <p className="ext-[#6F6F6F] py-4">
            
          </p>
        </div>
        <input
          className="bg-[#ECFAEE] p-2"
          type="text"
          placeholder="Nombre"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ECFAEE]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="my-4 p-2 bg-[#ECFAEE]"
          placeholder="Mensaje"
          name="message"
        />
        <button className="text-black border-2 border-[black] hover:bg-[#4FECA5] hover:border-[#4FECA5] px-4 py-3 my-8 mx-auto flex items-center ">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
