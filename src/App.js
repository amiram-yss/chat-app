import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import './server info/Users'
import ChatTile from './ChatTile';
import LoginForm from './LoginForm';
import React from 'react';
import users from './server info/Users';


//import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';

import RegistrationForm from './RegistrationForm';
import {useState} from 'react';
import Welcome from './Welcome';
import ChatInterface from './ChatInterface'






function App() {

  return (
    <ChatInterface/>
  );
}


export default App;
