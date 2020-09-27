import React from 'react';
import { Table } from 'react-bootstrap';

const CarList = (props) => {

    const renderlist = () =>( 
        props.cars.map((item,i) =>(
            <tr key={i}>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.price}</td>
            </tr>
        ))
    )

  return (
    <div>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
           {renderlist()}
        </tbody>
        </Table>
    </div>
  );
}

export default CarList;

