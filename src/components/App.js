import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import {Container, Row, Col} from 'react-bootstrap';
import MyNav from '../MyNav';
import MainPage from './MainPage';
import FilterSidebar from './Sidebar';
import {Line} from 'react-chartjs-2';
import Aboutus from './Aboutus'
import MyCamera from './MyCamera';


const App = () => {
    return (
        <div>
            <FilterSidebar/>
            <Router history={history}>
                <MyNav/>
                <div className="container">
                    <Switch>
                        <Route path="/about" exact component={Aboutus}/>
                        <Route path="/" exact component={MyCamera}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}


export default App;
