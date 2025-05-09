import React from "react";
import img1 from "../../assets/swimming.png";
import img2 from "../../assets/class.png";
import img3 from "../../assets/playground.png";
import qzonebg from "../../assets/bg.png";
const QZone = () => {
  return (
    <div className="p-4 mt-2 bg-base-200 rounded">
      <h1 className="text-lg font-semibold">Q-Zone</h1>
      <div className="space-y-3">
        <img className="block mx-auto" src={img1} alt="" />
        <img className="block mx-auto" src={img2} alt="" />
        <img className="block mx-auto" src={img3} alt="" />
        <img className="block mx-auto" src={qzonebg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
