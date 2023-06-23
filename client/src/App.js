import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Signup from './components/Singup';
import About from './components/About';
import Login from './components/Login';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';



const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route >
          <Errorpage />
        </Route>
      </Switch>
    </>

  )
}

export default App;
