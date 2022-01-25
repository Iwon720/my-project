import React, { useContext, useState } from "react";
import AuthContext from "../context";

const Home = () => {
  const logOut = () => {
    localStorage.clear();
    setIsAuth(false);
  }
  const {isAuth, setIsAuth} = useContext(AuthContext);

  return(
    <>
  <div className="container">
  <h3>Registration field</h3>
  <ul>

  <li>
    <div className="input-field col s6">
      <i className="material-icons prefix">account_circle</i>
      <input
        id="name"
        type="text"
        className="required blm"
        maxLength = "15"
        placeholder="Name"></input>
      </div>
    </li>

    <li>
      <div className="input-field col s6">
      <i className="material-icons prefix"></i>
        <input
          id="surname"
          type="text"
          className="validate blm"
          maxLength = "20"
          placeholder="Surname"></input>
        </div>
      </li>

    <li>
    <div className="input-field col s6">
      <i className="material-icons prefix">phone</i>
      <input
        id="phone"
        type="tel"
        className="validate blm"
        maxLength = "10"
        placeholder="Phone number"></input>
      </div>
      </li>

      <li>
      <div className="input-field col s6">
        <i className="material-icons prefix">date_range</i>
        <input
          id="date"
          type="date"
          className="validate blm"
          placeholder="Date of birth"></input>
        </div>
        </li>

          <li>
          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input
              id="email"
              type="email"
              className="validate blm"
              maxLength="20"
              pattern = "/@/"
              placeholder="E-mail"></input>
            </div>
            </li>

            <li>
            <div className="input-field col s6">
              <i className="material-icons prefix">security</i>
              <input
                id="password"
                type="password"
                className="validate blm"
                minLength="8"
                placeholder="Password"></input>
              </div>
              </li>

              <li>
              <form action="#">
                <div className="file-field input-field">
                <div className="btn deep-orange lighten-1">
                  <span>File</span>
                     <input type="file" multiple></input>
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate blm" type="text" placeholder="Upload some photos"></input>
                  </div>
                </div>
              </form>
              </li>
      </ul>
      <div className = "container-with-buttons">
        <div className="col s4">
          <a className="waves-effect waves-light btn deep-orange lighten-1">
            Registrate
          </a>
        </div>
        <div><a onClick = {() => logOut()}
          class="waves-effect deep-orange lighten-1 btn margin-left">
            <i class="material-icons">exit_to_app</i>
          </a>
        </div>
      </div>
      

  </div>
  </>
)
}
export default Home;
