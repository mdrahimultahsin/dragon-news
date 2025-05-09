import React from "react";
import Marquee from "react-fast-marquee";
const LatestNews = () => {
  return (
    <div className="bg-base-200 flex px-4 p-3 items-center gap-2">
      <button className="btn btn-secondary font-medium p-4">Latest</button>
      <Marquee className="font-semibold" pauseOnHover speed={50}>
        <p className="mr-5">
          🚨 Breaking: Cyclone Remal likely to hit coastal areas tonight.
        </p>
        <p className="mr-5">📢 Govt announces new education policy for 2025.</p>
        <p className="mr-5">
          💹 Dhaka Stock Exchange sees slight gain in early trading.
        </p>
        <p className="mr-5">
          🌍 G20 Summit concludes with key climate agreement.
        </p>
        <p className="mr-5">
          🏏 Bangladesh to face India in Asia Cup final on Sunday.
        </p>
        <p className="mr-5">
          🏥 Dengue cases rising in Dhaka, health alert issued.
        </p>
        <p className="mr-5">
          💡 Load-shedding reduced after new power plant launch.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
