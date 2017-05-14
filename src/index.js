import React ,{component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {IndexRoute} from 'react-router'
import {BrowserRouter,Route,NavLink, Redirect, Switch,history,browserHistory} from 'react-router-dom';

import App from './App';
import Login from './login/login';

import Header from './header/header';
import AttendenceAdmin from './admin/admin';
import './index.css';
import authClient from './authClient'

ReactDOM.render(

<BrowserRouter  history={browserHistory}>


            <Switch>
                <Route    exact={ true} path="/app" component={App}    />    
                <Route  exact={ true} path="/" component={AttendenceAdmin}  />  
                {/*<Route  exact={ true} path="/login" component={Login}  />  */}
                <Route   path="/admin/login" component={authClient} />                  

            </Switch>                         

   </BrowserRouter> 


  
, document.getElementById('root'));
