


import 'bootstrap/dist/css/bootstrap.min.css'
import './AddNewContactPop.css';
import SubmissionView from './SubmissionView';
import { Modal, Button, Alert } from 'react-bootstrap';
import React, { useEffect, useState } from "react";


function AddNewContactPop(args) { //User, render


    const [show, setShow] = useState(false);

    const [Name, setName] = useState({ name: "" });



    const handleOK = () => {

        let u = args.User.server.GetUserByName(Name.name)
        if (u != null && u.name != args.User.name) {
            args.User.addContact(u)
        }
        else if(u.name == args.User.name){
            alert("cant add yourself as contact")
        }
        else {
            alert("username not found, please try again")
        }
        handleClose();
        args.REnder();

        //args.User.Server.GetUserByName(Name.name)

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <div>
            <Button variant="primary btn-sm circ" onClick={handleShow} data-backdrop='false' data-dismiss='modal'>
                <i className="bi bi-person-plus-fill"></i>
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>add new contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    write here new contact from your contacts
                </Modal.Body>
                <input type="text" className="field items" placeholder="Type here..." onChange={e => setName({ name: e.target.value })} value={Name.name} />

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant="primary" onClick={handleOK}>
                        create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddNewContactPop;

/**
 * 
 * 
 *            
 */

/**
 * 
 * 
 * 
 * 
}
 */
