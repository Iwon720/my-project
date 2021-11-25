import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import AuthContext from "../context";
import { useDarkMode } from "../components/useDarkMode"
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Theme";
import { ThemeProvider } from "styled-components";
import Toggle from "./Toggler";


const NavBar = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <nav>
        <div className="nav-wrapper blue darken-4">
          <a href="" className="brand-logo margin-left">Logo</a>
          <ul id="nav" className="right hide-on-med-and-down">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/devices'>Devices</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
            <li>
              <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={themeToggler} />
            </ThemeProvider>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
