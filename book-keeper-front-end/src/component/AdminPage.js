import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Form, Button, Nav, CardColumns} from 'react-bootstrap';
import SideBar from './SideBar';
import './AdminPage.css';


import product_image from "./AdminPendingOrders/product_image.png";



export default class AdminPage extends React.Component{

    state = {
        sideBarHide : false,
    }

    render(){
        return(

            <div id="wrapper" className = { this.state.sideBarHide ? "d-flex toggled" : "d-flex"}>
                <SideBar />

                <div id="page-content-wrapper">

                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        className="border-bottom"
                        >
                        <Nav.Item className="toggle-container">
                            <Button 
                            
                            onClick={() => this.setState({sideBarHide : !this.state.sideBarHide})}>Menu</Button>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                    </Nav>


                    <div class="container-fluid">

                        <h1 class="mt-4">Pending Orders</h1>
                        <Container fluid>
                            <CardColumns>
                                <Card>
                                    <Card.Img variant="top" src={product_image}/>
                                    <Card.Header>Libang Liang</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <Card.Title>DJI Motor</Card.Title>
                                            </Col>
                                            <Col>
                                                <Card.Title>x1</Card.Title>
                                            </Col>
                                        </Row>
                                        <Card.Text>
                                            Product Info
                                        </Card.Text>
                                        <Card.Text>
                                            Product Price
                                        </Card.Text>
                                        <div className="accept-reject-details-button-container">
                                            <Button variant="outline-success">Accept</Button>{' '}
                                            <Button variant="outline-danger">Reject</Button>{' '}
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Img variant="top" src={product_image}/>
                                    <Card.Header>Libang Liang</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <Card.Title>DJI Motor</Card.Title>
                                            </Col>
                                            <Col>
                                                <Card.Title>x1</Card.Title>
                                            </Col>
                                        </Row>
                                        <Card.Text>
                                            Product Info
                                        </Card.Text>
                                        <Card.Text>
                                            Product Price
                                        </Card.Text>
                                        <div className="accept-reject-details-button-container">
                                            <Button variant="outline-success">Accept</Button>{' '}
                                            <Button variant="outline-danger">Reject</Button>{' '}
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Img variant="top" src={product_image}/>
                                    <Card.Header>Libang Liang</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <Card.Title>DJI Motor</Card.Title>
                                            </Col>
                                            <Col>
                                                <Card.Title>x1</Card.Title>
                                            </Col>
                                        </Row>
                                        <Card.Text>
                                            Product Info
                                        </Card.Text>
                                        <Card.Text>
                                            Product Price
                                        </Card.Text>
                                        <div className="accept-reject-details-button-container">
                                            <Button variant="outline-success">Accept</Button>{' '}
                                            <Button variant="outline-danger">Reject</Button>{' '}
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Img variant="top" src={product_image}/>
                                    <Card.Header>Libang Liang</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <Card.Title>DJI Motor</Card.Title>
                                            </Col>
                                            <Col>
                                                <Card.Title>x1</Card.Title>
                                            </Col>
                                        </Row>
                                        <Card.Text>
                                            Product Info
                                        </Card.Text>
                                        <Card.Text>
                                            Product Price
                                        </Card.Text>
                                        <div className="accept-reject-details-button-container">
                                            <Button variant="outline-success">Accept</Button>{' '}
                                            <Button variant="outline-danger">Reject</Button>{' '}
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Img variant="top" src={product_image}/>
                                    <Card.Header>Libang Liang</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <Card.Title>DJI Motor</Card.Title>
                                            </Col>
                                            <Col>
                                                <Card.Title>x1</Card.Title>
                                            </Col>
                                        </Row>
                                        <Card.Text>
                                            Product Info
                                        </Card.Text>
                                        <Card.Text>
                                            Product Price
                                        </Card.Text>
                                        <div className="accept-reject-details-button-container">
                                            <Button variant="outline-success">Accept</Button>{' '}
                                            <Button variant="outline-danger">Reject</Button>{' '}
                                        </div>
                                    </Card.Body>
                                </Card>
                                
                                
                                
                            </CardColumns>
                        </Container>
                    </div>
                </div>


            </div>

        );
    }
}