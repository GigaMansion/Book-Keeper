import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';

const navbar = <Navbar bg="light" expand="md">
<Navbar.Brand href="#home"><svg width="44px" height="30px" viewBox="0 0 88 61" version="1.1" >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M0,61 L0,56 L51,56 L51,36 L43,36 L43,31 L51,31 L51,23 L43,23 L43,18 L51,18 L51,0 L56,0 L56,61 L0,61 Z M68,0 L68,51 L83,51 L83,43 L88,43 L88,56 L63,56 L63,0 L68,0 Z M5,41 L5,51 L0,51 L0,41 L5,41 Z M38,41 L38,51 L33,51 L33,41 L38,41 Z M38,18 L38,36 L22,36 L22,51 L17,51 L17,36 L0,36 L0,18 L38,18 Z M79.6066017,17 L83.1421356,20.5355339 L76.106,27.571 L83.1421356,34.6066017 L79.6066017,38.1421356 L72.571,31.106 L72.5355339,31.1421356 L69,27.6066017 L69.035,27.571 L69,27.5355339 L72.5355339,24 L72.57,24.035 L79.6066017,17 Z M33,23 L5,23 L5,31 L33,31 L33,23 Z M22,4 L22,9 L38,9 L38,14 L0,14 L0,9 L17,9 L17,4 L22,4 Z" id="形状结合" fill="#000000"></path>
    </g>
</svg></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#home">Projects</Nav.Link>
    <Nav.Link href="#home">About</Nav.Link>
    <Nav.Link href="#link">Github</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>




function App() {
  return (
    <div className="App">
      {navbar}
      <header className="App-header">
        <svg width="250px" className="App-logo" height="250px" viewBox="0 0 50 50" version="1.1" >
            <title>页面 1</title>
            <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M25,10 C33.2842712,10 40,16.7157288 40,25 C40,33.2842712 33.2842712,40 25,40 C16.7157288,40 10,33.2842712 10,25 C10,16.7157288 16.7157288,10 25,10 Z M25,15 C19.4771525,15 15,19.4771525 15,25 C15,30.5228475 19.4771525,35 25,35 C30.5228475,35 35,30.5228475 35,25 C35,19.4771525 30.5228475,15 25,15 Z" id="形状结合" fill="#000000"></path>
                <path d="M25,0 C37.0948241,0 47.1836155,8.58884753 49.4999293,20.0000979 L44.3700885,20.0006836 C42.1501123,11.3742007 34.3194433,5 25,5 C15.6805567,5 7.84988768,11.3742007 5.62991149,20.0006836 L0.500070701,20.0000979 C2.81638453,8.58884753 12.9051759,0 25,0 Z" id="形状结合" fill="#000000"></path>
                <path d="M25,29.9993164 C37.0948241,29.9993164 47.1836155,38.5881639 49.4999293,49.9994143 L44.3700885,50 C42.1501123,41.3735171 34.3194433,34.9993164 25,34.9993164 C15.6805567,34.9993164 7.84988768,41.3735171 5.62991149,50 L0.500070701,49.9994143 C2.81638453,38.5881639 12.9051759,29.9993164 25,29.9993164 Z" id="形状结合" fill="#000000" transform="translate(25.000000, 39.999658) scale(1, -1) translate(-25.000000, -39.999658) "></path>
            </g>
        </svg>
      </header>
    </div>
  );
}

export default App;
