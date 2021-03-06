import React from 'react';
import './App.css';
import Navbar from "./components/Nav/Navbar";
import {HashRouter, Route} from "react-router-dom";
import Task1 from "./components/Tasks/Task1/Task1";
import Task2 from "./components/Tasks/Task2/Task2";
import Header from "./components/Header/Header";
import Task3 from "./components/Tasks/Task3/Task3";

const App = () => (
    <HashRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/task1' component={Task1}/>
                <Route path='/task2' component={Task2}/>
                <Route path='/task3' component={Task3}/>
            </div>
        </div>
    </HashRouter>
);

export default App;
