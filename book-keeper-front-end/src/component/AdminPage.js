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



// 1. change to function.
// 2. useEffect auth login first.

export default class AdminPage extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            sideBarHide : false,
        };

        this.handleRight = this.handleRight.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
      }



    handleRight(){
        if(this.state.sideBarHide === false){
            this.setState({sideBarHide : !this.state.sideBarHide});
        }
    }

    handleLeft(){
        if(this.state.sideBarHide === true){
            this.setState({sideBarHide : !this.state.sideBarHide});
        }
    }


    render(){
        return(
            <Router>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"></link>
                

                <div id="wrapper" className = { this.state.sideBarHide ? "d-flex toggled" : "d-flex"}>
                    <SideBar />
                    
                    <Swipeable onSwipedRight={this.handleRight} onSwipedLeft={this.handleLeft}>
                        <div id="page-content-wrapper">
                            
                            <Button onClick={() => this.setState({sideBarHide : !this.state.sideBarHide})} size="lg" variant="outline-dark" style={{margin:"1rem",textAlign:"center"}}>
                                <i className={this.state.sideBarHide ? "fa fa-angle-double-left" : "fa fa-angle-double-right"} style={{fontSize:"1.5rem"}}/>
                            </Button>
                            <Route path="/adminpage" exact component={AdminPendingOrders}/>
                            <Route path="/adminpage/manageRequest" exact component={AdminPendingOrders}/>
                            <Route path="/adminpage/dataVisualization" exact component={DataVisualization}/>
                            <Route path="/adminpage/accountSettings" exact component={AccountSettings}/>
                            <Route path="/adminpage/reimburseHistory" exact component={ReimburseHistory}/>
                            <Route path="/adminpage/newReimburse" exact component={NewReimburse}/>
                        </div>
                    </Swipeable>


                </div>

            </Router>

        );
    }
}

