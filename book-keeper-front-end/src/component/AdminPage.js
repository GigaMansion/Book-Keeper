import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Form, Button, Nav} from 'react-bootstrap';
import SideBar from './SideBar';
import './AdminPage.css';


export default class AdminPage extends React.Component{

    state = {
        sideBarHide : false,
    }

    render(){
        return(

            <div id="wrapper" className = { this.state.sideBarHide ? "d-flex" : "d-flex toggled"}>
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
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                            Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>


                    <div class="container-fluid">
                        <h1 class="mt-4">Simple Sidebar</h1>
                        <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                        <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
                    </div>
                </div>


            </div>

        );
    }
}