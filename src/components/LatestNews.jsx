import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/public/news.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-15" pauseOnHover={true} speed={60}>
        {news.map((item) => (
          <p key={item._id}>{item.title}</p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
