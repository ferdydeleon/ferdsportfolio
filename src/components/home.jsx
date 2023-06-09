import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Home = () => {
  return (
    <div id="home">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://img.freepik.com/premium-photo/programming-background-with-person-working-with-codes-computer_23-2150010151.jpg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-red-100">
            I'm Ferdinand
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-red-200">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                1000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast", // Types 'Three' without deleting 'Two'
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
