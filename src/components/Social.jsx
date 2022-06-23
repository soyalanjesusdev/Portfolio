import React from "react";

const Social = ({ Icons }) => {
  return (
    
    <div className="text-amber-500">
      {Icons.map((icon) => (
        
        <a  href={icon.link}
    target="_blank"
    rel="noreferrer"
    className="bg-slate-800 dark:bg-slate-800 rounded-lg overflow-hidden"
    >
        <span

          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-800 mx-1.5 text-3xl hover:text-gray-100 hover:bg-amber-500
        duration-300 "
        >
        
          <ion-icon name={icon.name}></ion-icon>
         
        </span>
        </a>
        
      ))}
    
      
    </div>
  );
};

export default Social;