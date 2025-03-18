"use client"
import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { useMotionValueEvent, useScroll } from 'framer-motion'
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
                  <span>Services</span>
                </Link>
                <Link to="od-wrapper" spy smooth offset={100}>
                  <span>Pricing Table</span>
                </Link>
              </div>
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
              <span>Services</span>
            </Link>
            <Link onClick={() => setMenuOpened(false)}
              to="od-wrapper"
              spy
              smooth>
              <span>Pricing Table</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
