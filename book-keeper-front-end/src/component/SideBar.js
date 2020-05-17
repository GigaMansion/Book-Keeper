import React,{useState,useEffect} from "react";
import {Navbar, Nav, NavDropdown,ListGroup} from "react-bootstrap";
import {Link, useLocation} from 'react-router-dom';
import './AdminPage.css'
import '@fortawesome/fontawesome-svg-core';

function SideBar(){

    const [activeIndex, setActiveIndex] = useState(-1);
    

    function handleClick(){
        console.log("hi");
    }

    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom">
                <svg width="50px" className="App-logo" height="50px" viewBox="0 0 50 50" version="1.1" >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path d="M25,10 C33.2842712,10 40,16.7157288 40,25 C40,33.2842712 33.2842712,40 25,40 C16.7157288,40 10,33.2842712 10,25 C10,16.7157288 16.7157288,10 25,10 Z M25,15 C19.4771525,15 15,19.4771525 15,25 C15,30.5228475 19.4771525,35 25,35 C30.5228475,35 35,30.5228475 35,25 C35,19.4771525 30.5228475,15 25,15 Z" id="形状结合" fill="#000000"></path>
                        <path d="M25,0 C37.0948241,0 47.1836155,8.58884753 49.4999293,20.0000979 L44.3700885,20.0006836 C42.1501123,11.3742007 34.3194433,5 25,5 C15.6805567,5 7.84988768,11.3742007 5.62991149,20.0006836 L0.500070701,20.0000979 C2.81638453,8.58884753 12.9051759,0 25,0 Z" id="形状结合" fill="#000000"></path>
                        <path d="M25,29.9993164 C37.0948241,29.9993164 47.1836155,38.5881639 49.4999293,49.9994143 L44.3700885,50 C42.1501123,41.3735171 34.3194433,34.9993164 25,34.9993164 C15.6805567,34.9993164 7.84988768,41.3735171 5.62991149,50 L0.500070701,49.9994143 C2.81638453,38.5881639 12.9051759,29.9993164 25,29.9993164 Z" id="形状结合" fill="#000000" transform="translate(25.000000, 39.999658) scale(1, -1) translate(-25.000000, -39.999658) "></path>
                    </g>
                </svg>
                <p>Book Keeper</p>
            </div>

            <ListGroup variant="flush">
                <Link to="/newReimburse">
                    <ListGroup.Item action variant="light" onClick={() => setActiveIndex(0)} className={activeIndex === 0 ? "active border-bottom" : "border-bottom"}>New Reimburse</ListGroup.Item>
                </Link>
                

                <Link to="/reimburseHistory">
                    <ListGroup.Item action variant="light" onClick={() => setActiveIndex(1)} className={activeIndex === 1 ? "active border-bottom" : "border-bottom"}>Reimburse History</ListGroup.Item>
                </Link>

                <Link to="/accountSettings">
                    <ListGroup.Item action variant="light" onClick={() => setActiveIndex(2)} className={activeIndex === 2 ? "active border-bottom" : "border-bottom"}>Account Settings</ListGroup.Item>
                </Link>

                <Link to="/dataVisualization">
                    <ListGroup.Item action variant="light" onClick={() => setActiveIndex(3)} className={activeIndex === 3 ? "active border-bottom" : "border-bottom"}>Data Visualization</ListGroup.Item>
                </Link>
                

                <Link to="/manageRequest">
                    <ListGroup.Item action variant="light" onClick={() => setActiveIndex(4)} className={activeIndex === 4 ? "active border-bottom" : "border-bottom"}>Manage Request</ListGroup.Item>
                </Link>
                
            </ListGroup>
        </div>
    );
}

export default SideBar;