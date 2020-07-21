import React from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/AlertState";
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/about";
import User from "./components/users/user";
import Home from "./components/pages/home";
import NotFound from "./components/pages/notFound";

const App = () => {
    return (
      <GithubState>
        <AlertState>
            <Router>
            <div className="App">
             <Navbar />
             <div className="container">
               <Alert alert={alert}/>
               <Switch>
                 <Route path="/" exact component={Home}/>
                 <Route exact path="/about" component={About}/>
                 <Route exact path="/user/:login" component={User}/>
                 <Route component={NotFound}/>
               </Switch>

             </div>
            </div>
            </Router>
        </AlertState>
      </GithubState>
    );
  }

export default App;
