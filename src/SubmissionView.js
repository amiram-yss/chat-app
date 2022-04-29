import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './SubmissionView.css';
import React from 'react';
import { useState } from 'react';

import AddNewContactPop from './AddNewContactPop';




function SubmissionView(User) {


    const [Text, setText] = useState({ text: ""});

    const sendMessage = e => {
        e.preventDefault()

        //Login(Text);

        console.log(User);

    
    }


    /**
     * <div></div>
     * 
     *  <AddNewContactPop/>
     *
     */

    return (

        <div className="row box">

            <div className="col optionBtn">


                <button className="optionBtn littlrBtn items" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-paperclip"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a href="#"><i className="dropdown-item bi bi-mic-fill"></i></a></li>
                    <li><a href="#"><i className="dropdown-item bi bi-camera-reels"></i></a></li>
                    <li><a href="#"><i className="dropdown-item bi bi-geo-alt"></i></a></li>
                    <li><a href="#"><i className="dropdown-item bi bi-image"></i></a></li>

                </ul>

            </div>

            <div className="col field">




                <input type="text" className="field items" placeholder="Type here..." onChange={e => setText({ text: e.target.value })} value={Text.text}/>

            </div>

            <div className="col sendBtn">
                <button className="littlrBtn items" onClick={sendMessage}>
                    <i class="bi bi-send"></i>
                </button>

            </div>


        </div>
    );
}

export default SubmissionView;




