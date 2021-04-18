import React from 'react';
import "App.css";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home2 from 'pages/home/Home2';
import TestPage from 'pages/test/TestPage';
import ResultsPage from 'pages/resultspage/ResultsPage';

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/"  component={Home2} />
                    <Route exact path="/:modal/:recivedPhoto" component={TestPage} />
                    <Route path="/home" component={Home2} />
                    <Route exact path="/:recivedPhoto" component={ResultsPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
