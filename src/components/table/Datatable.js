import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./../main/Main.css";


export default function Datatable({ data }) {
 const columns = data[0] && Object.keys(data[0]); 
 const [startDate, setStartDate] = useState(new Date());

 const insulatorsFromDate = () => {
     if (startDate) {
        var filteredDates = data.filter(date => new Date(date.isolated_start_day).getTime() >= startDate.getTime())
     }
     console.log(startDate)
     console.log(filteredDates)
 }

const graduatesInsulatorsFromDate = () => {
    if (startDate) {
        var filteredDates = data.filter(date => new Date(date.isolated_end_day).getTime() <= startDate.getTime())
     }
     console.log(startDate)
     console.log(filteredDates)
}
 
 return (
     <div>
            <Table striped bordered hover>
                <thead>
                    <tr>{data[0] && columns.map((heading) => <th>{ heading }</th>)}</tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr>
                            {columns.map((column) => (
                                <td>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="charts">

                <div className="charts__left">
                    <div className="charts__left__title">
                        <div>
                        <h1>Filter all insulators from a specific date</h1>
                        <DatePicker selected={startDate} onChange={startDate => setStartDate(startDate)} />
                        <Button variant="secondary" onClick={insulatorsFromDate}>Filter</Button>
                        </div>
                    </div>
                </div>      

                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                        <h1>Filter all insulators that have completed insulation by a certain date</h1>
                        <DatePicker selected={startDate} onChange={startDate => setStartDate(startDate)} />
                        <Button variant="secondary" onClick={graduatesInsulatorsFromDate}>Filter</Button>
                        </div>
                    </div>
                </div> 

            </div>

     </div>
 );
}