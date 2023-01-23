import React from "react";

interface Props {
  width: string;
}

const Project = ({ width }: Props) => {
  return (
    <div
      className={`
            group
            col-span-4 
            rounded-lg 
            md:col-span-${width}
            shadow-md  
            bg-white-400 
            md:h-96 h-72 
            w-full 
            hover:shadow-xl 
            transition-shadow 
            duration-300 
            relative
            ease-in-out`}
    >
      <div
        className="absolute w-full group-hover:opacity-100 md:opacity-0 bg-gradient-to-t from-[#22d3ee4D]   rounded bottom-0 p-4
        transition-opacity duration-300 ease-in-out"
      >
        <h6 className="font-link text-xl ">Client Webpage</h6>
        <p className="text-sm my-2 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          possimus alias sunt dolor enim fugiat sequi. Natus, perferendis.
          Adipisci laboriosam illum pariatur atque excepturi a dicta eius omnis
          qui. Magni.
        </p>
      </div>
    </div>
  );
};

export default Project;
