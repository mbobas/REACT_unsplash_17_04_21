import React from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home1 from './pages/home/Home1';
import TestPage from './pages/test/TestPage';
import ResultsPage from './pages/resultspage/ResultsPage';

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/"  component={Home1} />
                    <Route exact path="/:modal/:recivedPhoto" component={TestPage} />
                    <Route path="/home" component={Home1} />
                    <Route exact path="/:recivedPhoto" component={ResultsPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
