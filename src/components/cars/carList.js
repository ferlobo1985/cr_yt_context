import React,{ useContext } from 'react';
import { Table , Button} from 'react-bootstrap';
import { MyContext } from '../../context'

const CarList = () => {
    const context = useContext(MyContext);

    const renderlist = () =>( 
        context.cars.map((item,i) =>(
            <tr key={i}>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.price}</td>
            </tr>
        ))
    )

  return (
    <div>
        { context.toggleView ?
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
               context.triggerToggle();
            }}
        >
            Toggle it
        </Button>
        
    </div>
  );
}

export default CarList;

