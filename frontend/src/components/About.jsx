import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        {/* Text Section */}
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>At TestHub, the only thing we take seriously is food.</p>
          </div>

          <p className="mid">
            TestHub is dedicated to bringing you delicious meals crafted with
            fresh ingredients and passion. Our chefs combine traditional flavors
            with modern techniques to provide an unforgettable dining
            experience. Whether you're joining us for breakfast, lunch, or
            dinner, we make every dish with care and attention to detail.
          </p>

          <Link to={"/"}>
            Explore Menu <span><HiOutlineArrowRight /></span>
          </Link>
        </div>

        {/* Image Section */}
        <div className="banner">
          <img src="about.png" alt="About TestHub" />
        </div>
      </div>
    </section>
  );
};

export default About;
