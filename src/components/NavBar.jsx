import React, { useContext } from "react";
import { Link } from "react-router-dom"
import AuthContext from "../context";

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  return (
    <nav>
    <div className="nav-wrapper blue darken-4">
      <a href="" className="brand-logo margin-left">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/devices'>Devices</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
      </ul>
    </div>
  </nav>

  );
}
export default NavBar;
