import React, {useState} from 'react';

import {Button,Form,Modal} from 'react-bootstrap';

import './MainContent.css';

function AccountSettings(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const emailAddress = "l38liang@uwaterloo.ca"

    return(
        <div className="outside-container">

            
            <h1>Account Settings</h1>

            <p>Email Address: {emailAddress}</p>
            <Button variant="outline-primary" onClick={handleShow}>
                Change Password
            </Button>
            
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter old password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter new password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm new password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Change Password
                    </Button>
                </Modal.Footer>
            </Modal>

            


        </div>

    );

}

export default AccountSettings;