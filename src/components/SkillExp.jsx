import React from 'react'
import "./SkillExp.css"
import INFO from './myInfo';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbHexagonLetterC } from "react-icons/tb";

const SkillExp = () => {
  const [typeSkill] = useTypewriter({
    'words': INFO.skillsec.skills,
    'loop': {},
    'typeSpeed': 70,
    'deleteSpeed': 40,
  });
  return (
    <div id='experience' className="skillExpSec">
      <div className="redun1"></div>
      <div className="skillExpCont">
        <div className="skillLeft">
          <h2>{INFO.skillsec.title}</h2>
          <p>My skills include <span>{typeSkill}<Cursor/></span></p>
          <div className="skillCont">
            <div className="skill">
              <span><SiCplusplus /></span>
              <p>C++</p>
            </div>
            <div className="skill">
              <span><TbHexagonLetterC /></span>
              <p>C</p>
            </div>
            <div className="skill">
              <span><FaHtml5 /></span>
              <p>HTML</p>
            </div>
            <div className="skill">
            <span><FaCss3Alt /></span>
              <p>CSS</p>
            </div>
            {/* <div className="skill">
            <span><RiTailwindCssFill /></span>
              <p>Tailwind CSS</p>
            </div> */}
            <div className="skill">
            <span><SiJavascript /></span>
              <p>JavaScript</p>
            </div>
            {/* <div className="skill">
            <span><FaNode /></span>
              <p>Node JS</p>
            </div> */}
            <div className="skill">
            <span><RiReactjsFill /></span>
              <p>React JS</p>
            </div>
            {/* <div className="skill">
            <span><SiMongodb /></span>
              <p>Mongo DB</p>
            </div> */}

          </div>
        </div>
        <div className="skillRight">
          <h2>Work Experience</h2>
          <div className="work">
            <h3>Intern at RCI DRDO</h3>
            <p>I have worked as an intern in RCI(Research Center Imarat) DRDO on the working, development and optimi-sation of energy management system for supercapacitors and batteries that are used in aerospace applications. Conducted experiments and analysed data on how a BMS(Battery Management System) works along with visual understanding of various futuristic technologies and current technologies.</p>
          </div>
          <div className="work">
            <h3>Intern at OctaNet Services</h3>
            <p>I have worked  Currently working as a Front-End Web Developer, contributing to the development of web applications using HTML, CSS, JavaScript. Enhancing expertise in front-end technologies by building responsive and dynamic user interfaces</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default SkillExp