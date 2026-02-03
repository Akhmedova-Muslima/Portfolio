import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../stores/theme/themeSlice';

import figma from '../assets/img/figma.svg';
import linked from '../assets/img/linkedin.svg';
import git from '../assets/img/github.svg';
import theme from '../assets/img/theme.svg';

export default function Navbar() {
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="nav">
      <div className="nav_icons">
        <a href="https://figma.com"><img src={figma} alt="figma" className="nav_icons_img" /></a>
        <a href="https://www.linkedin.com/in/muslima-akhmedova/"><img src={linked} alt="linkedin" className="nav_icons_img" /></a>
        <a href="https://github.com/Akhmedova-Muslima"><img src={git} alt="github" className="nav_icons_img" /></a>

        <button onClick={handleThemeChange}>
          <img src={theme} alt="theme" className="nav_icons_icon" />
        </button>
      </div>

      <ul className="nav_links">
        <li className="nav_links_link"><a href="#work">Projects</a></li>
        <li className="nav_links_link"><a href="#study">Study</a></li>
        <li className="nav_links_link"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
