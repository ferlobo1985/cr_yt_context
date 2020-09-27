import React, { Component } from 'react';

const CarsContext = React.createContext();
const UsersContext = React.createContext();

class MyProvider extends Component {

    state = {
        cars:[
            {brand:"Ford",model:"Viper",price:200},
            {brand:"Chevy",model:"Scammer",price:280},
            {brand:"Nissan",model:"Clowner",price:250},
            {brand:"Renault",model:"Tortoise",price:600}
        ],
        toggleView:false
    }

    toggleViewHandler = () => {
        this.setState({
            toggleView:!this.state.toggleView
        })
    }

    render(){
        return(
            <CarsContext.Provider value={{
                cars: this.state.cars,
                toggleView: this.state.toggleView,
                triggerToggle: this.toggleViewHandler
            }}>
                <UsersContext.Provider value={'Steve'}>
                    {this.props.children}
                </UsersContext.Provider>
            </CarsContext.Provider>
        )
    }
}

export { CarsContext,UsersContext,MyProvider }