import '../index.scss'
import { NavLink } from 'react-router-dom';

function ConstantInfo() {
  return (
    <>
      <h1>Andrew Ratz</h1>
      <div>
        <p className="text--small">I am a software engineer with a passion for creating intuitive user experiences. I have experience in web development, mobile app development, and game development.</p>
        <br/>
        <NavLink className="wrapper--info" role="button" to="mailto:andrewratz47@gmail.com">
          <span>Email</span>
          <span>andrewratz47@gmail.com</span>
        </NavLink>
        <br/>
        <NavLink className="wrapper--info" role="button" to="https://www.linkedin.com/in/andrewratz/">
          <span>LinkedIn</span>
          <span>Andrew Ratz</span>
        </NavLink>
        <br/>
        <NavLink className="wrapper--info" role="button" to="https://github.com/ar4757">
          <span>GitHub</span>
          <span>ar4757</span>
        </NavLink>
        <br/>
      </div>
      <footer>
        <p className="text--tiny">© Copyright 2025 Andrew Ratz</p>
      </footer>
    </>
  )
}

export default ConstantInfo
