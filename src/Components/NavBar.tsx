import '../index.scss'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavBar() {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(true);
  
  useEffect(() => {
    if (isHamburgerClicked) {
      document.querySelector('.left')?.classList.add('left--hamburger');
      document.querySelector('.right')?.classList.add('right--hamburger');
      document.querySelector('.nav')?.classList.add('nav--hamburger');
      document.querySelector('.hamburger')?.classList.add('is-active');
    }
    else {
      document.querySelector('.left')?.classList.remove('left--hamburger');
      document.querySelector('.right')?.classList.remove('right--hamburger');
      document.querySelector('.nav')?.classList.remove('nav--hamburger');
      document.querySelector('.hamburger')?.classList.remove('is-active');
    }
  }, [isHamburgerClicked]);

  return (
      <nav className="nav">
        <div className="nav-btn--logo">
          <button className="hamburger hamburger--spin" type="button" onMouseUp={() => setIsHamburgerClicked(!isHamburgerClicked)}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <NavLink className="nav-btn nav-btn--notlogo" role="button" to="/portfolio/resume"><span>Resume</span></NavLink>
        <NavLink className="nav-btn nav-btn--notlogo" role="button" to="/portfolio"><span>Home</span></NavLink>
      </nav>
  );
};

export default NavBar;