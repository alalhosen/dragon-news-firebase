import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ({ latestNews }) => {
  // const { title } = latestNews;
  const title = latestNews?.title || "Loading news...";
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-15" pauseOnHover={true} speed={60}>
        <p className="font-bold">{title}</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
