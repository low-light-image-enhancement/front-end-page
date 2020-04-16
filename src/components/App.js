import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import {Container, Row, Col} from 'react-bootstrap';
import MyNav from '../MyNav';
import MainPage from './MainPage';
import FilterSidebar from './Sidebar';

const App = () => {
    return (
        <div>
            <MyNav />
            <FilterSidebar/>
            <Router history={history}>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}


export default App;
