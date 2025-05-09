import React from "react";
import {  PacmanLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="w-full flex min-h-screen justify-center items-center">
        <PacmanLoader  color={"#d72050"}/>
      {/* <span className="loading loading-infinity w-10"></span> */}
    </div>
  );
};

export default Spinner;
