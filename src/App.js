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






function App() {

  const Login = details => {
    console.log(details);

    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (details.name == element.userName && details.password == element.pass) {
            console.log("Well Done!!!");
            setUser({
                name: details.name
            });
            return;
        }
    }
    console.log("NO!");

}

  const [user, setUser] = useState({name:"", nickName:""});


  return (
    <BrowserRouter>

      <div className='App'>
        {(user.name != "") ? (
          <RegistrationForm />
        ) : (

          <Welcome Login={Login} />
        )

        }

      </div>
    </BrowserRouter>
  );
}


export default App;
