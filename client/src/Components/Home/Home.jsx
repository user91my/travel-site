import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

// Animate on scroll library
// https://www.npmjs.com/package/aos
import Aos from "aos";
import "aos/dist/aos.css";
import VideoPlayer from "./VideoPlayer";

const Home = () => {
  const budgetSlider = useRef();
  const [budget, setBudget] = useState(5000);

  const formattedNumber = (number) =>
    new Intl.NumberFormat("en-US", {
      // style: "decimal",
      // minimumFractionDigits: 2,
      // maximumFractionDigits: 2,
    }).format(number);

  // Initiate the 'aos' library
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>

      <div className="videoDiv">
        <VideoPlayer />
      </div>

      <div className="homeContent container">
        <div className="textDiv">
          <div data-aos="fade-up" className="smallText">
            YOUR DESTINATION AWAITS
          </div>
          <h1 data-aos="fade-up" className="homeTitle">
            We'll take you there
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          {/* DESTINATION INPUT */}
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here...." />
              <GrLocation className="icon" />
            </div>
          </div>

          {/* DATE INPUT */}
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          {/* PRICE INPUT */}
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Your budget:</label>
              <h3 className="total">${formattedNumber(budget)}</h3>
            </div>
            <div className="input flex">
              <input
                ref={budgetSlider}
                onChange={() => setBudget(budgetSlider.current.value)}
                value={budget}
                type="range"
                max="10000"
                min="1000"
              />
            </div>
          </div>

          {/* MORE FILTERS */}
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
