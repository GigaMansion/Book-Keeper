import React from 'react';

import {Container, Row, Col, Card, Button, Nav, CardColumns} from 'react-bootstrap';

import product_image from "./product_image.png";

export default class AdminPendingOrders extends React.Component{




    render(){
        return(
            <>

            <Nav
            fill variant="pills"
            activeKey="/home"
            className="border-bottom border-top"
            >
                <Nav.Item className="toggle-container">
                    
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link href="/home">Pending Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Completed Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Rejected Orders</Nav.Link>
                </Nav.Item>
            </Nav>

            <div className="container-fluid">

                <h1 className="mt-4">Pending Orders</h1>
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

            </>




        );
    }
}