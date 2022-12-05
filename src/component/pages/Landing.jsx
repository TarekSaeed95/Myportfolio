import React from 'react'
import {FaArrowRight, FaHome, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Landing() {
  return (
    <div className="landing h-screen">
    <div className="container flex justify-center items-center ">
        <div className="intro-text  ">
            <h2  className="title  neon-text  font-extrabold">Welcome, To Tarek World</h2 >
            <div className=' mt-5 flex justify-center items-center gap-5'>

            <p className='text-3xl w-fit '>Here is my Portfolio
             </p>
             <div className='arrow-holder'>
              <Link to="/about">
                 <FaArrowRight className='text-slate-200 text-2xl'/> 
              </Link>
             </div>
            </div>

        </div>
    </div>
        
    
</div>

  )
}

export default Landing