import React, { Component } from 'react';

const MyContext = React.createContext();

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
            <MyContext.Provider value={{
                cars: this.state.cars,
                toggleView: this.state.toggleView,
                triggerToggle: this.toggleViewHandler
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext,MyProvider }