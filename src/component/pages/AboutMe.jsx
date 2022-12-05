import React from 'react'
import about from '../../images/about.png'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import cv from '../../images/Tarek Resume.pdf'
function AboutMe() {
  return (
    <div className="about min-h-screen flex items-center ">
      <div className="container flex justify-around items-center mt-48 lg:mt-0">
      <div className="image max-w-sm mb-10 lg:mb-0">
          <img src={about} alt="about" />
        </div>
       <div className="text flex flex-col gap-5  items-start mb-10 lg:mb-0">
        <p className=''>Who Am I ?</p>
          <h2 className='text-info'>About Me</h2>
          <p className='underline decoration-info underline-offset-4 text-slate-200 inline'>Hello! My name is Tarek S.Ahmed 28 Years old i live in Egypt. <br/>
          Iam a Front-End Web Developer..<br/>
          Iam not an expert in this field yet but i think iam good in it.<br/>
          Go ahead and Take a look on my Portfolio to see my Projects. 
          <Link to="/projects"><FaArrowRight className='inline text-warning ml-3 text-xl'/> </Link></p> 
          <p className=''>Here are a few technologies I've been working with recently:</p>
            <ul className='text-slate-200 marker:text-info' style={{"list-style":"inside"}}>
              <li text->HTML&CSS</li>
              <li>JS</li>
              <li>SCSS</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>React</li>
            </ul>
            <div className="btn btn-warning btn-lg btn-outline">
              <a href={cv} className="capitalize" download>Download CV</a>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default AboutMe