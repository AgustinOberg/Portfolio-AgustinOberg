import React from "react";
import SectionTitle from "../SectionTitle/index";

const Contact = () => {
  return (
    <>
      <div className="md:px-24 px-4">
        <SectionTitle>Get in touch</SectionTitle>
        <p>
          Need help with your product or website? Send me a message or drop me a
          mail to{" "}
          <span className="font-link font-bold text-gray-700 underline decoration-cyan-400 tracking-wider">
            agustin.oberg@gmail.com
          </span>
        </p>
      </div>
      {/* 
        TODO: FORM to send email
      <form
        className="w-1/3 mx-auto mt-8"
        onSubmit={(values) => console.log(values)}
      >
        <TextInput id="name" placeholder="Name" />
        <TextInput id="name" placeholder="Name" />
        <TextInput id="name" placeholder="Name" />
      </form> */}
    </>
  );
};

export default Contact;
