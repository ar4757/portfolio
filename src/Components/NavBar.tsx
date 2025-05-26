import '../index.scss'
import { NavLink } from 'react-router-dom';

function NavBar() {
 return (
    <nav className="nav">
      <NavLink className="btn btn--logo" role="button" to="/"><span>Andrew Ratz</span></NavLink>
    </nav>
 );
};

export default NavBar;