import React from 'react';

import {Container, Row, Col, Card, Form, Button, Nav, CardColumns, Table} from 'react-bootstrap';

import Reimburse from './ReimburseHistory/Reimburse';
import { DropdownDivider } from 'react-bootstrap/Dropdown';
import './MainContent.css'


const data =[
    {'Reimburse ID': '87463542', 'Product Name': 'product a', 'Price': 1, 'Quantity': 1, 'Date Applied':'2020-05-01', 'Status':'Approved'},
    {'Reimburse ID': '87463543', 'Product Name': 'product b', 'Price': 2, 'Quantity': 1, 'Date Applied':'2020-05-02', 'Status':'Rejected'},
    {'Reimburse ID': '87463544', 'Product Name': 'product c', 'Price': 4, 'Quantity': 1, 'Date Applied':'2020-05-03', 'Status':'Received'},
    {'Reimburse ID': '87463545', 'Product Name': 'product d', 'Price': 2, 'Quantity': 1, 'Date Applied':'2020-04-21', 'Status':'Received'},
    {'Reimburse ID': '87463546', 'Product Name': 'product e', 'Price': 3, 'Quantity': 1, 'Date Applied':'2020-05-02', 'Status':'Approved'}
];

function ReimburseHistory(){

    const getRow = (data,keys) =>{
        return(
            keys.map((key,index) => {
                return <td key={index}>{data[key]}</td>
            })
        );
    }

    const getKeys = (data) =>{
        return Object.keys(data[0]);
    }

    const getRowsData = (data) => {
        var keys = getKeys(data);
        return(
            data.map((eachData, index) =>{
                return <tr key={index}>{getRow(eachData,keys)}</tr>
            })

        );
    }
    const renderKeys = (data) => {
        var keys = getKeys(data);
        return(
            keys.map((key) =>{
            return <th key={key}>{key}</th>
            })
        );
    }

    return(
        <div className="outside-container">
            <h1>Reimburse History Page</h1>

            <Table responsive bordered>
                <thead>
                    <tr>
                        {renderKeys(data)}
                    </tr>
                </thead>
                <tbody>
                    {getRowsData(data)}
                </tbody>
            </Table>

        </div>

    );

}

export default ReimburseHistory;