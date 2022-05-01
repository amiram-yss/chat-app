


import 'bootstrap/dist/css/bootstrap.min.css'
import './AddNewContactPop.css';
import SubmissionView from './SubmissionView';
import { Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState } from "react";


function AddNewContactPop(args) {


    const [show, setShow] = useState(false);

    const [Name, setName] = useState({ name: "" });



    const handleOK = () => {
        //args.User.addChat("rat");
        handleClose();
        args.REnder();

        //args.User.Server.GetUserByName(Name.name)

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <div>
            <div className='addNew'>
                <Button variant="primary btn-sm " onClick={handleShow} data-backdrop='false' data-dismiss='modal'>
                    <i className="bi bi-person-plus-fill"></i>
                </Button>
            </div>

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
