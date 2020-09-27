import React,{Component} from 'react';
import CarList from './carList';
import { CarsContext, UsersContext } from '../../context'

class Cars extends Component {
    static contextType = CarsContext;

    render(){
       // console.log(this.context)
        return(
            <>
                <CarsContext.Consumer>
                    {
                        context => {
                            console.log(context);
                            return (
                                <UsersContext.Consumer>
                                    {  user => {
                                        console.log(user)
                                    }}
                                </UsersContext.Consumer>
                            )
                        }
                    }
                </CarsContext.Consumer>


                <CarList/>
            </>
        )
    }
}

export default Cars;
