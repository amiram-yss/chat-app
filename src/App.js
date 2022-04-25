import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ChatTile from './ChatTile';
import LoginForm from './LoginForm';
import React from 'react';

//import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';

import RegistrationForm from './RegistrationForm';
import {useState} from 'react';
import Welcome from './Welcome';






function App() {

  return (
    <Welcome />

  );
}

export default App;
