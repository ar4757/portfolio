import '../index.scss'
import { NavLink } from 'react-router-dom';

function NavBar() {
 return (
    <nav className="nav">
      <NavLink className="btn btn--notlogo" role="button" to="/resume"><span>Resume</span></NavLink>
      <NavLink className="btn btn--notlogo" role="button" to="/"><span>Home</span></NavLink>
    </nav>
 );
};

export default NavBar;