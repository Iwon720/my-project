import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {theme === 'light' ? setTheme('dark') : setTheme('light')}
  useEffect(() => {
    if(window.localStorage.getItem('auth', 'false')){
      setIsAuth(true);
    }
  })
  return (
    <>   
    <AuthContext.Provider
    value = {{
      isAuth,
      setIsAuth
    }}
    >
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
    </>
  );
};

export default App;
