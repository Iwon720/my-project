import React, { useContext, useState } from "react";
import AuthContext from "../context";
import http from '../http'

const Login = () => {
  localStorage.setItem('auth', 'true');
  const loginData = {
    login: "ganstas",
    pass: "paradise",
  };
  const [inputData, setInputData] = useState({
    login: "",
    pass: "",
  });
  const [error, setError] = useState("");
  const onChange = (e) => {
    const field = {};
    field[e.target.id] = e.target.value;
    setInputData({ ...inputData, ...field });
    setError('');
  };
  console.log(inputData);

  const checkUser = () => {
    if (loginData.login === inputData.login && loginData.pass === inputData.pass) {
      setIsAuth(true);
      console.log("заплотил уже");
    } else {
      setError("wsio fignia, Misha, davai po nowoi");
    }
  };

  const login = () => {
    http.post('/login', inputData).then((res) => {
      localStorage.setItem('auth', 'true');
      setIsAuth(true);
    }).catch((err)=>console.log('wrong data'));
  }

  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div class="row">
      <form class="col s12">
        <div class="row row-login">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input
              onChange={onChange}
              id="login"
              type="text"
              class="validate blm"
            />
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">password</i>
            <input
              onChange={onChange}
              id="pass"
              type="tel"
              class="validate blm"
            />
          </div>
          <a onClick={() => checkUser()} class="waves-effect waves-light btn deep-orange lighten-1 btn-login">
            <i class="material-icons left"></i>плоти налоги
          </a>
        </div>
        {error && <h1 className="red-text text-darken-4">{error}</h1>}

      </form>
    </div>
  );
};

export default Login;
