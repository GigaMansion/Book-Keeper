import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import SideBar from './SideBar';
import './AdminPage.css';

import AppsIcon from '@material-ui/icons/Apps'

import AdminPendingOrders from './AdminPendingOrders/AdminPendingOrders';
import DataVisualization from './DataVisualization';
import AccountSettings from './AccountSettings';
import ReimburseHistory from './ReimburseHistory';
import NewReimburse from './NewReimburse';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { Swipeable} from 'react-swipeable';



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
                        <div id="page-content-wrapper" >

                            <Button onClick={() => this.setState({sideBarHide : !this.state.sideBarHide})} size="lg" variant="outline-secondary" style={{margin:"1rem",textAlign:"center", border:"0"}}>
                                <AppsIcon fontSize="large"/>
                            </Button>
                            <Route exact path="/adminpage"  component={AdminPendingOrders}/>
                            <Route exact path="/adminpage/manageRequest"  component={AdminPendingOrders}/>
                            <Route exact path="/adminpage/dataVisualization"  component={DataVisualization}/>
                            <Route exact path="/adminpage/accountSettings"  component={AccountSettings}/>
                            <Route exact path="/adminpage/reimburseHistory"  component={ReimburseHistory}/>
                            <Route exact path="/adminpage/newReimburse"  component={NewReimburse}/>
                        </div>
                    </Swipeable>


                </div>

            </Router>

        );
    }
}

