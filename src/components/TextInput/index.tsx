import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const TextInput = ({ error, id, ...rest }: Props) => {
  return (
    <div className="flex flex-col space-y-1 mb-5">
      <input
        id={id}
        name={id}
        className={`
            px-4 
            py-2 
            shadow-sm 
            rounded border 
            border-gray-200 
            focus:outline-none 
            focus:shadow-md 
            transition 
            duration-150 
            ease-in-out 
            tracking-widest 
            font-link
            ${error ? "border-red-200" : ""}
        `}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{`* ${error}`}</p>}
    </div>
  );
};

export default TextInput;
