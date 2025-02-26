import React from 'react'
import INFO from './myInfo';
import "./Project.css"
import { FaGithub } from "react-icons/fa";
import portfolioImg from "/assets/portfolioImg.png";
import todoImg from "/assets/todoImg.png";
import spotifyImg from "/assets/spotifyImg.png"
import twitterImg from "/assets/twitterImg.png"
import netflixImg from "/assets/netflixImg.png"
import landingpageImg from "/assets/landingpageImg.png"

const images = [portfolioImg, todoImg, spotifyImg, twitterImg, netflixImg, landingpageImg]

const Project = () => {
  return (
    <div id='projects' className='projSec'>
        <div className="redun1"></div>
        <h2>{INFO.projectsec.title}</h2>
        <p>{INFO.projectsec.description}</p>
        <div className="projCont"> 
        {INFO.projectsec.projects.map((project, index)=>{
            return (
                <div className="project" key={index}>
                    <img src={images[index]}alt="project-pic" />
                    <h3>{project.title} <span></span></h3>
                    <p className='projSkill'>{project.skills}</p>
                    <p>{project.description}</p>
                    <a href={project.link} target='blank'>GITHUB <FaGithub /></a>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Project