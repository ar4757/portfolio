import '../index.scss'
import { NavLink } from 'react-router-dom';

function ConstantInfo() {
  return (
    <>
      <h1>Andrew Ratz</h1>
      <div>
        <p className="text--small">I am a software engineer with a passion for creating innovative solutions. I have experience in web development, mobile app development, and game development.</p>
        <p className="text--small">I am currently working on various projects that involve web scraping, data analysis, and machine learning.</p>
        <div className="wrapper--info">
          <span className="top">Email</span>
          <NavLink className="bottom btn btn--notlogo" role="button" to="mailto:ar4757@gmail.com"><span>ar4757@gmail.com</span></NavLink>
        </div>
        <br/>
        <div className="wrapper--info">
          <span className="top">LinkedIn</span>
          <NavLink className="bottom btn btn--notlogo" role="button" to="https://www.linkedin.com/in/andrewratz/"><span>Andrew Ratz</span></NavLink>
        </div>
        <br/>
        <div className="wrapper--info">
          <span className="top">GitHub</span>
          <NavLink className="bottom btn btn--notlogo" role="button" to="https://github.com/ar4757"><span>GitHub</span></NavLink>
        </div>
        <br/>
      </div>
    </>
  )
}

export default ConstantInfo
