import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div className="container pb-4">
      <h2>Latest News</h2>
      <div className="news">
        <li>
          <a href="https://www.techadvisor.com/news/laptops" target="{_blank}">
            Tech Advisor
          </a>
        </li>
        <li>
          <a href="https://www.laptopmag.com/news" target="{_blank}">
            Laptop Mag
          </a>
        </li>
        <li>
          <a href="https://gadgets360.com/laptops/news" target="{_blank}">
            Gadgets360
          </a>
        </li>
        <li>
          <a href="https://www.gizbot.com/laptop/" target="{_blank}">
            Gizbot{" "}
          </a>
        </li>
      </div>
    </div>
  );
};

export default Location;
