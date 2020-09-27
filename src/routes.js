import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header';
import Home from './components/home';
import Cars from './components/cars'

const Routes = ({cars}) =>(
    <>
    <BrowserRouter>
            <Header/>
            <Container className="mt-3">
                <Switch>
                    <Route path="/cars" render={(props) => 
                        <Cars {...props} cars={cars}/>
                    } />
                    <Route path="/" component={Home} />
                </Switch>
            </Container>
    </BrowserRouter>
    </>
)

export default Routes;