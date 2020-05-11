import React from 'react';

import {Container, Row, Col, Card, Form, Button, Nav, CardColumns} from 'react-bootstrap';



import './NewReimburse.css'



function NewReimburse(){

    return(
        <div className="outside-container">
            <h1><b>New Reimburse</b></h1>
        
        
        <Form >

            <Form.Group controlId="formProductName">
                <Form.Label>Name of Product</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" />
            </Form.Group>

            <Form.Group controlId="formClassification">
                <Form.Label>Classification</Form.Label>
                <Form.Control type="text" placeholder="Enter classification" />
            </Form.Group>



            <Form.Group controlId="formUSLink">
                <Form.Label><b>AMERICAN</b> Website Link</Form.Label>
                <Form.Control type="text" placeholder="Enter website link" />
            </Form.Group>

            <Form.Group controlId="formProductLink">
                <Form.Label>Item Website Link</Form.Label>
                <Form.Control type="text" placeholder="Enter website link" />
            </Form.Group>

            <Form.Group controlId="formProductLink">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter website link" />
            </Form.Group>

            <Form.Group controlId="formProductLink">
                <Form.Label>Quantity</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formProductLink">
                <Form.Label>Delivery</Form.Label>
                <Form.Control type="text" placeholder="Enter website link" />
            </Form.Group>

            <Form.Group controlId="formProductLink">
                <Form.Label>Date Needed</Form.Label>
                <Form.Control type="text" placeholder="Enter website link" />
            </Form.Group>

            <Form.Group controlId="formProductLink">
                <Form.Label>Reason to Purchase</Form.Label>
                <Form.Control type="text" placeholder="Enter website link" />
            </Form.Group>



            <Form.Group>
                <Form.Label>Receipt Photo</Form.Label>
                <Form.File 
                    id="custom-file"
                    label="Custom file input"
                    custom
                />

            </Form.Group>



            <Form.Group>
                <Button variant="success" type="submit" size="lg">
                    Submit
                </Button>

            </Form.Group>


        </Form>
        </div>
    );

}

export default NewReimburse;