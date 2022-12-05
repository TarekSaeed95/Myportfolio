import skills from '../../images/skills.png'
function Skills() {

  return (
    <div className="our-skills bg-slate-200 min-h-screen flex items-center" id="our-skills">
    <div className="container ">
      <div className="bot-area">
          <img src={skills} alt=""/>
          <div className="content">
              <div className="title">HTML</div>
              <div className="back-ground w-full bg-slate-400" data-progress="90%"><span style={{"width":"90%"}} className="bg-primary"></span></div>
              <div className="title">CSS</div>
              <div className="back-ground" data-progress="95%"><span style={{"width":"95%"}} className="bg-primary"></span></div>
              <div className="title">JavaScript</div>
              <div className="back-ground" data-progress="85%"><span  style={{"width":"85%"}} className="bg-primary"></span></div>
              <div className="title">REACT</div>
              <div className="back-ground" data-progress="85%"><span  style={{"width":"85%"}} className="bg-primary"></span></div>
              <div className="title">Tailwind</div>
              <div className="back-ground" data-progress="80%"><span style={{"width":"80%"}} className="bg-primary"></span></div>
          </div>
      </div>
    </div>
</div> 

  )
}

export default Skills