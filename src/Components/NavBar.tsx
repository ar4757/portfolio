import '../index.scss'
import { NavLink } from 'react-router-dom';

function NavBar() {
 return (
    <nav className="nav">
      <NavLink className="btn btn--logo" role="button" to="/"><span>Andrew Ratz</span></NavLink>
      <NavLink className="btn btn--notlogo" role="button" to="https://github.com/ar4757"><span>GitHub</span></NavLink>
      <NavLink className="btn btn--notlogo" role="button" to="/resume"><span>Resume</span></NavLink>
    </nav>
 );
};

export default NavBar;