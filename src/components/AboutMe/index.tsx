import Skills from "@/Skills";
import React from "react";
import SectionTitle from "../SectionTitle";

const AboutMe = () => {
  return (
    <section className="flex flex-wrap md:px-16 justify-center md:justify-between">
      <div className="h-80 w-80 bg-red-400 rounded-full shadow-md" />
      <div className="w-80 md:grow px-4 md:px-12 pt-4 md:pt-0 ">
        <SectionTitle className="text-center md:text-left">
          About me
        </SectionTitle>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi
          recusandae accusantium. Nisi quasi dolorem nihil odio aperiam!
          Doloremque maiores corporis beatae praesentium enim repudiandae
          temporibus consequatur vel officiis. Incidunt commodi dolor esse sunt,
          iste, nulla mollitia numquam impedit voluptatibus, atque culpa
          deleniti consectetur maiores dignissimos provident odit odio.
          Reprehenderit suscipit cumque aliquam officiis. Deleniti assumenda
          minus obcaecati, et reiciendis qui eos cumque. Modi doloribus eligendi
          laudantium culpa amet reprehenderit error. Modi ipsam impedit error
          iure porro quidem deserunt eaque?
        </p>
        <Skills />
      </div>
    </section>
  );
};

export default AboutMe;
