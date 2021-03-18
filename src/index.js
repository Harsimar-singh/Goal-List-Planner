import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Todo from './components/Todo';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/budget" exact component={Budget} />
        <Route path="/todo" exact component={Todo} />
    </BrowserRouter>,
     document.getElementById('root'));
