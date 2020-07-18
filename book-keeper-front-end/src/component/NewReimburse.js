import React, {useState} from 'react';

import {Container, Row, Col, Card, Form, Button, Nav, CardColumns} from 'react-bootstrap';
import {SubmitNewReimburse} from './api/SubmitReimburse'


import './MainContent.css'



function NewReimburse(){

    const input = React.createRef();
    const [receiptFile, setReceiptFile] = useState("");

    const [productName, setProductName] = useState("");
    const [classification, setClassification] = useState("");
    const [itemUrl, setItemUrl] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [dateNeeded, setDateNeeded] = useState("");
    const [reasonToPurchase, setReasonToPurchase] = useState("");
    
    function receiptUploadhandler(e){
        setReceiptFile(input.current.value)
        e.preventDefault();
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            productName: productName,
            classification: classification,
            itemUrl: itemUrl,
            price: price,
            quantity: quantity,
            deliveryFee: deliveryFee,
            dateNeeded: dateNeeded,
            reasonToPurchase: reasonToPurchase,
        }
        console.log(data)
    }

    return(
        <div className="outside-container">
            <h1><b>New Reimburse</b></h1>
        
        
        <Form >

            <Form.Group controlId="formProductName">
                <Form.Label>Name of Product</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formClassification">
                <Form.Label>Classification</Form.Label>
                <Form.Control type="text" placeholder="Enter classification" value={classification} onChange={(e) => setClassification(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formProductLink">
                <Form.Label>Item Website Link</Form.Label>
                <Form.Control type="text" placeholder="Enter website link" value={itemUrl} onChange={(e) => setItemUrl(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control as="select" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDelivery">
                <Form.Label>Delivery</Form.Label>
                <Form.Control type="number" placeholder="Enter delivery fee" value={deliveryFee} onChange={(e) => setDeliveryFee(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formDateNeeded">
                <Form.Label>Date Needed</Form.Label>
                <Form.Control type="date"  value={dateNeeded} onChange={(e) => setDateNeeded(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formReasonToPurchase">
                <Form.Label>Reason to Purchase</Form.Label>
                <Form.Control type="text" placeholder="Enter reason" value={reasonToPurchase} onChange={(e) => setReasonToPurchase(e.target.value)}/>
            </Form.Group>



            <Form.Group>
                <Form.Label>Receipt Photo</Form.Label>
                <Form.File 
                    id="select-receipt"
                    label={receiptFile === "" ? "Select Receipt/Photo" : receiptFile}
                    custom
                    ref={input}
                    onChange ={receiptUploadhandler}
                    style={{overflow:"hidden"}}
                />

            </Form.Group>


            <Form.Group>
                <Button variant="success" type="submit" size="lg" onClick={handleSubmit}>
                    Submit
                </Button>

            </Form.Group>


        </Form>
        </div>
    );

}

export default NewReimburse;