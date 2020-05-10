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






export default class AdminPage extends React.Component{

    state = {
        sideBarHide : false,
    }

    render(){
        return(
            <Router>

                <div id="wrapper" className = { this.state.sideBarHide ? "d-flex toggled" : "d-flex"}>
                    <SideBar />
                    <div id="page-content-wrapper">
                        <Route path="/manageRequest" exact component={AdminPendingOrders}/>
                        <Route path="/dataVisualization" exact component={DataVisualization}/>
                        <Route path="/accountSettings" exact component={AccountSettings}/>
                        <Route path="/reimburseHistory" exact component={ReimburseHistory}/>
                        <Route path="/newReimburse" exact component={NewReimburse}/>
                    </div>


                </div>

            </Router>

        );
    }
}