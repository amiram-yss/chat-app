import 'bootstrap/dist/css/bootstrap.min.css'
import './Welcome.css';

import ChatTile from './ChatTile';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

import React from 'react';

//import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';

import {useState} from 'react';
import LoginCard from './LoginCard';
import RegisterCard from './RegisterCard';




function Welcome() {
    return (




        <section>
            <div className="px-4 py-5 px-md-5 text-center welcomeText" >
                <div className="container ">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h1 className="my-5 display-5 fw-bold ls-tight">
                                Welcome to the inner WhatsApp of   <br />
                                <span className="text-warning display-3 fw-bold">---</span>
                            </h1>
                            <p className='welcomeText'>

                            </p>
                        </div>

                        <div className="col-lg-8 mb-5 mb-lg-3">
                            <div className="card">
                                <div className="card-body py-5 px-md-5">

                                    <BrowserRouter>

                                        <Routes>

                                            <Route path="/" element={<LoginCard />}></Route>
                                            <Route path="/register" element={<RegisterCard />}></Route>

                                        </Routes>
                                    </BrowserRouter>


                                </div>
                            </div>
                        </div>

                    </div>

                </div >


            </div>




        </section>



    )
}

export default Welcome;