import React, { useEffect } from "react";
import "./footer.css";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import video from "../../Assets/vid-02.mp4";

// Animate on scroll library
// https://www.npmjs.com/package/aos
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  // Initiate the 'aos' library
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>STAY IN TOUCH</small>
            <h2>We'll Take You There</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travista
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              est sit amet facilisis magna etiam tempor orci eu lobortis
              elementum nibh tellus molestie nunc non blandit massa enim nec dui
              nunc mattis enim ut
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <RiTwitterXLine className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">SPECIAL OFFERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                North America
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Asia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                South America
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>TRAVEL AGENCY OF THE YEAR</small>
            <small>ALL RIGHTS RESERVED - TRAVISTA INC.</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
