import React ,{component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {IndexRoute} from 'react-router'
import {Router,BrowserRouter,Route,NavLink, Redirect, Switch} from 'react-router-dom';

import App from './App';
import Login from './login/login';
import SignUp from './signup/signup';
import Header from './header/header'
import './index.css';


ReactDOM.render(

 <BrowserRouter>
        {/* If path is / then load the Home component */}
<App>
            <Switch>
              
                <Route   path="/login" component={Login} />
                <Route  path="/signup" component={SignUp} />
                {/*<Courses>
                    <Route path="/courses/html" component={HTML} />
                    <Route path="/courses/css" component={CSS} />
                    <Route path="/courses/javascript" component={JavaScript} />
                </Courses>*/}

            </Switch>
 </App>
    </BrowserRouter>
, document.getElementById('root'));
