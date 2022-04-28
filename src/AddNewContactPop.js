


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
 *            
 */

/**
 * 
 * 
 * 
 * 
}
 */
