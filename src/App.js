import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Router path="*">
              <NotFound></NotFound>
            </Router>
          </Switch>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
