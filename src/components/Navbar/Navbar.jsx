"use client"
import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky")
    } else {
      setNavStyle("")
    }
  });
  ; return (
    <div>
      <div className={`n-wrapper ${navStyle}`}>
        {/* desktop verion */}

        <div className="container">
          <div className="n-container">

            {/* left side  */}
            <div className="n-logo">
              <span>Hemant</span>
            </div>

            {/* right side  */}
            <div className="n-right">
              <div className="n-menu">
                <Link to="wwd-wrapper" spy={true} smooth={true}>
                  <span>What we do</span>
                </Link>
                <Link to="hiw-wrapper" spy smooth offset={100}>
                  <span>How it works</span>
                </Link>
                <Link to="wwi-wrapper" spy smooth>
                  <span>When We Invest</span>
                </Link>
                {/* <span>Testimonial</span> */}
              </div>
              <div className="fund-button">Get funded</div>
            </div>
          </div>
        </div>


        {/* mobile verion  */}
        <div className="nm-container">

          {/* logo */}
          <span>Hemant</span>

          {/* menu icon */}
          {
            !menuOpened ? (
              <BiMenuAltRight size={30} onClick={() => setMenuOpened(true)} />
            ) : (
              <RxCross2 size={30} onClick={() => setMenuOpened(false)} />
            )}
          <div className="nm-menu"
            style={{ transform: menuOpened && "translateX(0%)" }}>
            <Link onClick={() => setMenuOpened(false)}
              to="wwd-wrapper"
              spy={true}
              smooth={true}>
              <span>What we do</span>
            </Link>
            <Link onClick={() => setMenuOpened(false)}
              to="hiw-wrapper"
              spy
              smooth
              offset={100}>
              <span>How it works</span>
            </Link>
            <Link onClick={() => setMenuOpened(false)}
              to="wwi-wrapper"
              spy
              smooth>
              <span>When We Invest</span>
            </Link>
            {/* <Link to="wwd-wrapper" spy={true} smooth={true}>
              <span>Testimonial</span>
            </Link> */}
            <div className="m-funded-button">Get funded</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
