import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Home from "../pages/home";
import AdminPanel from "../pages/admin-panel";
import AdminHomePage from "../pages/admin-pages/admin-home-page";

const RouterComponent = () => {
    return (
        <>
            <Route exact path='/' render={() => <Redirect to='/home'/>}/>
            <Route exact path='/home' render={() => <Home/>}/>
            <Route exact path='/admin' render={() => <AdminHomePage/>}/>
            <Route exact path='/adminHome' render={() => <AdminPanel/>}/>
        </>
    );
};

export default RouterComponent;
