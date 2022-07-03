import React from "react";

import Picture from "./Picture";

import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-8'>
   
      <div className="w-full md:w-12/12">
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300 text-justify '>
        I am Alan MERN Stack Software developer and Digital Marketing Advisor with strong problem solving skills, motivated and passionate about continuous learning. I currently work as a Developer at Bession and I also provide mentoring in the area of web development and digital marketing on a volunteer basis. 
        </p>
      </div>
       <Picture/>
     
    </div>
  );
}

export default About;
