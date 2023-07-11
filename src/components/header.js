import React from 'react';
import { Link } from 'gatsby';  // Gatsby's Link component for internal navigation
import * as headerStyles from './header.module.css';  // CSS Module for styling

import ctLogo from "../images/ct-logo.png"

const Header = () => (
  <header className={headerStyles.header}>
    <h1 className={headerStyles.title}>
      <img id={headerStyles.orgLogo} src={ctLogo} alt/>
    </h1>
    <ul className={headerStyles.navList}>
      <li>
        <Link to="#project">PROJECT</Link>
      </li>
      <li>
        <Link to="#faq">FAQ</Link>
      </li>
      <li>
        <Link to="https://dl.acm.org/doi/10.1145/3593013.3594020" target="_blank">PAPER</Link>
      </li>
      <li>
        <Link to="#data">DATA</Link>
      </li>
      <li>
        <Link to="#press">PRESS</Link>
      </li>
      <li>
        <Link to="#team">TEAM</Link>
      </li>
      <li>
        <Link to="#support">SUPPORT</Link>
      </li>
    </ul>
  </header>
);

export default Header;
