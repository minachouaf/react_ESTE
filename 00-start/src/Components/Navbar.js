import React,{Component} from "react";
import   {link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <li   ><link  to="/"> Home </link> </li>
        <li > <link  to ="/about">About  </link> </li>
        <li> <link  to="/articleListPage">Articles  </link> </li>
      </ul>
    );
  }
}
export default Navbar;
/*
 <ul>
        <li   name='Home'  onClick={(e)=>this.props.handleClick}> Home</li>
        <li name='About'    onClick={(e)=>this.props.handleClick}>About  </li>
        <li name='Articles'  onClick={(e)=>this.props.handleClick}> Articles </li>
      </ul>
      */