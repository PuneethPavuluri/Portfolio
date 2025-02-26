import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="navSec">
      <nav>
      <div className="navbar">
        <a className="navTitle" href="#about">
          Puneeth Pavuluri
        </a>
        <div className="navMenu">
        <div className="navMenuBtn" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <IoClose /> : <RxHamburgerMenu />}</div>
          <ul
            className={`navMenuItems ${menuOpen ? "menuOpen" : ""}`}
            onClick={() => setMenuOpen(false)}
            // className='navMenuItems menuOpen'
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
