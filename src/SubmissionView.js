import 'bootstrap/dist/css/bootstrap.min.css'
import './SubmissionView.css';
import React from 'react';
import { useState } from 'react';
import {Button, InputGroup} from 'react-bootstrap'
import AddNewContactPop from './AddNewContactPop';
import User from './data stractures/User';



function SubmissionView(args) {


    const [Text, setText] = useState({ text: "" });

    const sendMessage = e => {
        var time = new Date()
        //e.preventDefault()

        setText({ text: Text })
        // if(Text == ""){
        //     return
        // }
        let newMessage = { content: Text.text, time: time.getHours() + ":" + time.getMinutes() }
        newMessage.addresser = args.User
        newMessage.addressee = args.chat
        console.warn(newMessage)
        args.chat.sendMessage(newMessage)
        console.info(args.chat)
        setText({ text: "" })
    }

    /**
     * <div></div>
     * 
     *  <AddNewContactPop/>
     * 
     * //onclick="doupload()"
     *
     */

    return (
        <div className="row box">
            <div className="col optionBtn">
                <button className="optionBtn littlrBtn items" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-paperclip"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <button className="OPTbtn">
                        <li><a href="#"><i className="dropdown-item bi bi-mic-fill" ></i></a></li>
                    </button >
                    <button className="OPTbtn">
                        <li><a href="#"><i className="dropdown-item bi bi-camera-reels"></i></a></li>
                    </button>
                    <button className="OPTbtn">
                        <li><a href="#"><i className="dropdown-item bi bi-image"></i></a></li>
                    </button>
                </ul>
            </div>
            
            <div className="col field">
                <input type="text" className="field msgbox" placeholder="Type here..." onChange={e => setText({ text: e.target.value })} value={Text.text} />
            </div>

            <div className="col sendBtn">
                <button className="littlrBtn items" onClick={() => {
                    if (Text.text == '')
                        return
                    sendMessage()
                    args.onSubmitClick(Text.text)
                    args.REnder()
                }}>
                    <i className="bi bi-send"></i>
                </button>

            </div>


        </div>
    );
}

export default SubmissionView;




