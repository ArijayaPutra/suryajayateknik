import React, { useState } from "react";
import logosjt from "../img/logo-poolshop-suryajayateknik.jpg";
import { HashLink as Link } from "react-router-hash-link";
import Akun from "../img/akun.svg";
const NavItem = (props) => (
  <Link
    to={props.href}
    className="block text-right tracking-wider text-base  px-2 py-2 hover:bg-primary rounded hover:text-white transition ease-out duration-300"
  >
    {props.text}
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow sm:flex justify-between border border-gray-300 ">
      <div className="flex items-center px-4 py-4 justify-between">
        <div className="flex items-center">
          <img className="h-8" src={logosjt} alt="poolshop-suryajayateknik" />
          <ul className="ml-2">
            <li>
              <a
                className="hover:text-gray-600 transition ease-out duration-300 tracking-wider transform hover:scale-125 text-xs sm:text-base"
                href="/"
              >
                POOLSHOP SURYAJAYATEKNIK
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <button onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 cursor-pointer "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      <ul className={`${isOpen ? "block" : "hidden"} sm:flex items-center`}>
        <NavItem text="HOME" href="/#home" />
        {/* <NavItem text="SERVICES" href="/#services" /> */}
        {/* <NavItem text="CLIENT" href="/#client" /> */}
        <NavItem text="PRODUCT" href="/product" />
        <NavItem text="BLOG" href="/blog" />
        <NavItem text="CLIENT" href="/productn" />
        <NavItem text="SERVICES" href="/servicen" />
        <NavItem text="CONTACT" href="/contact" />
        
      </ul>
      <img src={Akun} alt="" className= "w-12 mr-12" />
    </header>
  );
};

export default Navbar;
