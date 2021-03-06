import React from "react";
import Social from "./Social";
import { Icons } from "../data/icons";

function Footer() {
  return (
    <div>
      <div className="py-8 bg-slate-800 text-center text-gray-500 rounded-t-lg">
        <a href="#hero" className="block text-xl md:text-2xl  font-semibold">
          AlanDev
        </a>
        <p className="text-xs font-regular mt-5 text-gray-400">
          AlanDev Built with ❤️ ©{new Date().getFullYear()}. All rights
          reserved.
        </p>

        <Social Icons={Icons} />
      </div>
    </div>
  );
}

export default Footer;
