import React from "react";
import About from "./pages/About";
import articleListPage from "./pages/articleListPage";
import Home from "./pages/Home";
import './App.css';
import Navbar from "./Components/Navbar";
import  articlePage from "./pages/articlePage";
import { BrowserRouter } from 'react-router-dom'
import {BrowserRouter as Router,Switch,Route,Link}  from "react-router-dom";

//npm install --save 00-start to install router
//  <Route  component={NotFoundPage}/>
class App extends React.Component {
  render() {
   
    return (
    <Router>
    <div className="App"> 

    <switch>
    <Route  path="/" component={Home} exact />
    <Route  path="/about" component={About}  />
    <Route  path="/articles" component={articleListPage}  />
    <Route  path="/article/:name" component={articlePage}  />
  
   
    </switch>
    
   </div>

   </Router>
   );


  }
}


export default App;


 /*state = {
    page: "try"
  };

  handleClick=(e)=>{
    this.setState({page : e.target.getAttribute('name')});

  }
  render() {
   
    return (
    
    <div className="App"> 
    <Navbar   clickhandle={this.handleClick}/>
    {this.state.page === "Home" ? 
    <Home />
    : this.state.page === "About" ? 
     <About />: <articleListPage />}
   </div>
   );*/
  //router equivalent a if if if dans j'ajoute exact 