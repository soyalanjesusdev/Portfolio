import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20 ">
      <div className="text-center ">
        <h1 className=" text-2xl md:text-4xl mb-1 md:mb-3 text-amber-500 font-semibold dark:text-amber-500">
          Hi, This is Alan
        </h1>
        <p className=" text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300 ">
          <Typewriter
            options={{
              strings: [
                "MERN Stack Developer",
                "Digital Marketing Advisor",
                "Web Designer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <a
          href="#works"
          className=" inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500  hover:bg-amber-300 md:text-md transition 
		duration-500 
		ease-in-out 
		
		transform 
		hover:-translate-y-2 
		hover:rotate-6 
		hover:scale-125 
		"
        >
          {" "}
          See Works
        </a>
      </div>
    </div>
  );
}

export default Hero;
