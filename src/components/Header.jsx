import React from "react";
import logo from "../assets/logo.png";
import {format} from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <a href="/">
        <img className="w-120" src={logo} alt="" />
      </a>
      <p className="text-primary-content">Journalism Without Fear or Favour</p>

      <p className="font-medium text-lg text-primary-content">
        <span className="text-[#403F3F]">{format(new Date(), "EEEE")}</span>,{" "}
        {format(new Date(), "LLLL MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
