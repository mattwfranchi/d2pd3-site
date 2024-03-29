import React from 'react';
import { Link } from 'gatsby';  // Gatsby's Link component for internal navigation
import { Script } from 'gatsby';
import * as headerStyles from './header.module.css';  // CSS Module for styling

import ctLogo from "../images/ct-logo.png"

const Header = () => (
  
  <header className={headerStyles.header}>
    <h1 className={headerStyles.title}>
      <img id={headerStyles.orgLogo} src={ctLogo} alt/>
    </h1>
    <ul className={headerStyles.navList}>
      <li>
        <Link to="#project" className={headerStyles.project}>PROJECT</Link>
      </li>
      <li>
        <Link to="https://arxiv.org/abs/2305.15210" className={headerStyles.paper} target="_blank">PAPER</Link>
      </li>
      <li>
        <Link to="#data" className={headerStyles.data}>DATA</Link>
      </li>

      <li>
        <Link to="#team" className={headerStyles.team}>TEAM</Link>
      </li>
    </ul>
  </header>
);

export default Header;
