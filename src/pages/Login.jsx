import React, { useContext, useState } from "react";
import AuthContext from "../context";

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
      setError("wsio fignia, davai po nowoi");
    }
  };

  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input
              onChange={onChange}
              id="login"
              type="text"
              class="validate"
            />
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">password</i>
            <input
              onChange={onChange}
              id="pass"
              type="tel"
              class="validate"
            />
          </div>
        </div>
        {error && <h1 className = "red-text text-darken-4">{error}</h1>}
        <a onClick={() => checkUser()} class="waves-effect waves-light btn">
          <i class="material-icons left"></i>плоти налоги
        </a>
      </form>
    </div>
  );
};

export default Login;
