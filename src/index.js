import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import App from './App';
import AttendenceAdmin from './admin/admin';
import './index.css';
import authClient from './authClient'

ReactDOM.render(

<BrowserRouter  >


            <Switch>
                <Route    exact={ true} path="/app" component={App}    />    
                <Route  exact={ true} path="/" component={AttendenceAdmin}  />  
                {/*<Route  exact={ true} path="/login" component={Login}  />  */}
                <Route   path="/admin/login" component={authClient} />                  

            </Switch>                         

   </BrowserRouter> 


  
, document.getElementById('root'));
