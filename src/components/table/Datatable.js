import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "./../main/Main.css";


export default function Datatable({ data }) {
 const columns = data[0] && Object.keys(data[0]); 
 
 return (
     <div style={{minHeight: 100}}>
            <Table striped bordered hover>
                <thead>
                    <tr>{data[0] && columns.map((heading) => <th key={heading}>{ heading }</th>)}</tr>
                </thead>
                <tbody>
                    {data.map((row) => {
                        return (
                            <tr key={row.id}>
                                {columns.map((column) => (
                                    <td key={row.id + column}>{row[column]}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
     </div>
 );
}