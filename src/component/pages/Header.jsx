import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className="header w-full absolute top-0 left-0  bg-black ">
     <div className="container">
               <Link className='text-xl logo btn btn-outline btn-primary' to="/">T</Link>
            <div className="links text-slate-200">
                <ul className='gap-5'>
                    <li className=" text-slate-200"><Link  className="btn  btn-primary  " to="/about">ِAbout Me</Link></li>
                    <li className=" text-slate-200"><Link  className="btn btn-primary " to="/projects">Projects</Link> </li>
                    <li className=" text-slate-200"><Link className="btn btn-primary "  to="/skills">Skills</Link> </li>
                    <li className=" text-slate-200"><Link className="btn btn-primary "  to="/contact">Contact</Link> </li>
                </ul>
                </div>
    </div>
</div>
  )
}

export default Header