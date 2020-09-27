import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header';
import Home from './components/home';
import Cars from './components/cars';
import { MyProvider } from './context';

const Routes = () =>(
    <>
    <BrowserRouter>
        <MyProvider>
            <Header/>
            <Container className="mt-3">
                <Switch>
                    <Route path="/cars" component={Cars}/>
                    <Route path="/" component={Home} />
                </Switch>
            </Container>
        </MyProvider>
    </BrowserRouter>
    </>
)

export default Routes;