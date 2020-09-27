import React,{Component} from 'react';
import CarList from './carList';
import { MyContext } from '../../context'

class Cars extends Component {
    static contextType = MyContext;


    render(){
       // console.log(this.context)
        return(
            <>
                <MyContext.Consumer>
                    {
                        context => {
                            console.log(context)
                        }
                    }
                </MyContext.Consumer>


                <CarList/>
            </>
        )
    }
}

export default Cars;
