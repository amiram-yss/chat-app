


import 'bootstrap/dist/css/bootstrap.min.css'
import './AddNewContactPop.css';
import SubmissionView from './SubmissionView';
import { Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState } from "react";





function AddNewContactPop() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow} data-backdrop='false' data-dismiss='modal'>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddNewContactPop;

/**
 * 
 * 
 *            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rrr" >
                Launch demo modal
            </button>
            <div  id="rrr" className="modal fade"  aria-labelledby="modal-title" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            אוףףףףףףףףףף
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
 */

/**
 * 
 * 
 * 
 * .modal.fade {
z-index: -1050;
top: -25%;
-webkit-transition: opacity 0.3s linear, top 0.3s ease-out;
-moz-transition: opacity 0.3s linear, top 0.3s ease-out;
-ms-transition: opacity 0.3s linear, top 0.3s ease-out;
-o-transition: opacity 0.3s linear, top 0.3s ease-out;
transition: opacity 0.3s linear, top 0.3s ease-out;
}
 */
