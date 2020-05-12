import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Form, Button, Nav} from 'react-bootstrap';
import SideBar from './SideBar';
import './AdminPage.css';



import AdminPendingOrders from './AdminPendingOrders/AdminPendingOrders';
import DataVisualization from './DataVisualization';
import AccountSettings from './AccountSettings';
import ReimburseHistory from './ReimburseHistory';
import NewReimburse from './NewReimburse';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Swipeable ,useSwipeable} from 'react-swipeable';





export default class AdminPage extends React.Component{
    

    state = {
        sideBarHide : false,
    }


    render(){
        return(
            <Router>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"></link>
                

                <div id="wrapper" className = { this.state.sideBarHide ? "d-flex toggled" : "d-flex"}>
                    <SideBar />
                    
                    <Swipeable onSwipedLeft={() => this.setState({sideBarHide : !this.state.sideBarHide})} >
                        <div id="page-content-wrapper">
                            
                            <Button onClick={() => this.setState({sideBarHide : !this.state.sideBarHide})} size="lg" variant="outline-dark" style={{margin:"1rem",textAlign:"center"}}>
                                <i className={this.state.sideBarHide ? "fa fa-angle-double-left" : "fa fa-angle-double-right"} style={{fontSize:"1.5rem"}}/>
                            </Button>
                            <Route path="/manageRequest" exact component={AdminPendingOrders}/>
                            <Route path="/dataVisualization" exact component={DataVisualization}/>
                            <Route path="/accountSettings" exact component={AccountSettings}/>
                            <Route path="/reimburseHistory" exact component={ReimburseHistory}/>
                            <Route path="/newReimburse" exact component={NewReimburse}/>
                        </div>
                    </Swipeable>


                </div>

            </Router>

        );
    }
}