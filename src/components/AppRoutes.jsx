import { React, useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Users from "../pages/Users";
import Devices from "../pages/Devices";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import AuthContext from "../context";
import Registration from "../pages/Registration";
// import Loader from "react-loader-spinner";

const AppRoutes = () => {
  // const [loading, setLoading] = useState(true);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 3000);
  // if (loading) {
  //   return <Loader color="#ee6e73" timeout={3000} />;
  // }

  const {isAuth} = useContext(AuthContext)
  return(
    isAuth ? 
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/devices" component={Devices} />
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Redirect to = "/users"/>
      </Switch>
     : 
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Redirect to = "/login"/>

      </Switch>
    
  )
};

export default AppRoutes;
