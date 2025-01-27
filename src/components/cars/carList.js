import React,{ useContext } from 'react';
import { Table , Button} from 'react-bootstrap';
import { CarsContext,UsersContext } from '../../context'

const CarList = () => {
    const carsContext = useContext(CarsContext);
    const userContext = useContext(UsersContext);

    const renderlist = () =>( 
        carsContext.cars.map((item,i) =>(
            <tr key={i}>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.price}</td>
            </tr>
        ))
    )

  return (
    <div>
        { carsContext.toggleView ?
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
        :null}
        <Button
            onClick={ ()=> {
                carsContext.triggerToggle();
            }}
        >
            Toggle it
        </Button>
        <hr/>
        <div>
            The user is {userContext}
        </div>
        
    </div>
  );
}

export default CarList;

