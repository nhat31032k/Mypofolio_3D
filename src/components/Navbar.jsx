import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, fox, IconKorumi } from "../assets";
import { useOnClickOutside } from "../hooks";
import "./NavbarStyle/Navbar.scss";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setToggle(false));
  const handleShowMenu = () => {
    setToggle(!toggle);
  };
  return (
    <nav
      className={`
    ${styles.paddingX}
    w-full flex items-center py-5 fixed top-0 z-20 bg-primary
  `}
    >
      <div className="home-menu w-full max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={fox} alt="logo" className="w-9 h-9 object-contain" /> */}
          <IconKorumi className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Sun &nbsp;<span className="sm:block hidden"> | Nguyen</span>
          </p>
        </Link>
        {/* <p className="text-red-500">Nhat</p> */}
        <ul className="list-none hidden sm:flex flex-grow gap-10 ml-auto">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(item.title)}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            ref={ref}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    active === item.title ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    handleShowMenu();
                    setActive(item.title);
                  }}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
