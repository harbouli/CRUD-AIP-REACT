import { Fragment, useContext, useState } from "react";
import "./css/App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Add from "./pages/Add";
import Update from "./pages/Update";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { MyContext } from "./context/MyContext";

function App() {
  const { rootState } = useContext(MyContext);
  const { isAuth } = rootState;
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Login">
            {isAuth ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/add">{!isAuth ? <Redirect to="/" /> : <Add />}</Route>
          <Route path="/update/:id">
            {!isAuth ? <Redirect to="/" /> : <Update />}
          </Route>
          <Route path="/Singup">
            {isAuth ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
