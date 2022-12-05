import github_finder from '../../images/projects/Capture1.PNG'
import feed from '../../images/projects/Feedback.PNG'
import quizzical from '../../images/projects/Quizzical.PNG'
import portfolio from '../../images/projects/template portfolio.PNG'
import speco from '../../images/projects/speco.PNG'
import { FaThumbsUp} from 'react-icons/fa'
function Projects() {
  return (
    <div className="projects min-h-screen flex items-center" id="projects">
    <div className="container flex justify-center flex-col">
        <div className="">articles</div>
        <div className="cards  mx-auto my-48 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10 justify-between items-center">
        <div className="card compact max-w-sm bg-neutral shadow-2xl">
            <figure><img src={github_finder} alt="project 1" /></figure>
            <div className="card-body ">
                <h2 className="card-title text-slate-200">GitHub Finder</h2>
                <p>GitHub Finder Simple Application helps you to search for GitHub users Info and Repos in organized layout.</p>
                <div className="card-actions justify-end">
                  <a href="https://github-finder-three-khaki.vercel.app/" target="_blank" rel="noreferrer"><button className="btn btn-warning">Visit</button></a>
                  <a href="https://github.com/TarekSaeed95/Github-finder" target="_blank" rel="noreferrer"><button className="btn btn-secondry text-slate-200">GitHub</button></a>
                </div>
            </div>
        </div>
        <div className="card compact max-w-sm bg-neutral shadow-2xl">
            <figure><img src={feed} alt="project 2" /></figure>
            <div className="card-body ">
                <h2 className="card-title text-slate-200">Feedback-website</h2>
                <p>Website to get clients feedbacks can be edited or deleted,feedbacks are saved in mocked db by json-server.</p>
                <div className="card-actions justify-end">
                  <a href="https://feedback-three-tau.vercel.app/" target="_blank" rel="noreferrer"><button className="btn btn-warning">Visit</button></a>
                  <a href="https://github.com/TarekSaeed95/Feedback-website" target="_blank" rel="noreferrer"><button className="btn btn-secondry text-slate-200">GitHub</button></a>
                </div>
            </div>
        </div>
        <div className="card compact max-w-sm bg-neutral shadow-2xl">
            <figure><img src={quizzical} alt="project 3" /></figure>
            <div className="card-body ">
                <h2 className="card-title text-slate-200">Quizzical</h2>
                <p>Quizzical is Web-Application game with 5 Questions about Sports linked with dynamic API to get new Questions every time
                  go ahead and try it now. <FaThumbsUp className="inline"/>
                </p>
                <div className="card-actions justify-end">
                  <a href="https://quzzical.vercel.app/" target="_blank" rel="noreferrer"><button className="btn btn-warning">Visit</button></a>
                  <a href="https://github.com/TarekSaeed95/Quzzical" target="_blank" rel="noreferrer"><button className="btn btn-secondry text-slate-200">GitHub</button></a>
                </div>
            </div>
        </div>
        <div className="card compact max-w-sm bg-neutral shadow-2xl">
            <figure><img src={portfolio} alt="project 4" /></figure>
            <div className="card-body ">
                <h2 className="card-title text-slate-200">Portfolio template</h2>
                <p>Website with many sections,enhanced styles and beautiful Animations made with HTML and New CSS technologies only</p>
                <div className="card-actions justify-end">
                  <a href="https://portfolio-silk-theta-75.vercel.app/" target="_blank" rel="noreferrer"><button className="btn btn-warning">Visit</button></a>
                  <a href="https://github.com/TarekSaeed95/Portfolio" target="_blank" rel="noreferrer"><button className="btn btn-secondry text-slate-200">GitHub</button></a>
                </div>
            </div>
        </div>
        <div className="card compact max-w-sm bg-neutral shadow-2xl">
            <figure><img src={speco} alt="project 5" /></figure>
            <div className="card-body ">
                <h2 className="card-title text-slate-200">Speco-template</h2>
                <p>Website with setting box to save user-preferences, multi background images, bullets to change section.</p>
                <div className="card-actions justify-end">
                  <a href="https://speco-tareksaeed95.vercel.app/" target="_blank" rel="noreferrer"><button className="btn btn-warning">Visit</button></a>
                  <a href="https://github.com/TarekSaeed95/Speco-template" target="_blank" rel="noreferrer"><button className="btn btn-secondry text-slate-200">GitHub</button></a>
                </div>
            </div>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Projects