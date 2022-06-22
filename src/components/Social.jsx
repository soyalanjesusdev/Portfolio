import React from "react";

const Social = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-4 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-2 text-xl hover:text-gray-100 hover:bg-amber-500
        duration-300 "
        >
          <icon name={icon.name}></icon>
        </span>
      ))}
    </div>
  );
};

export default Social;