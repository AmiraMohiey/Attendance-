

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'react-bootstrap';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { AppBar,Title } from 'admin-on-rest';
import { App } from '../App';
import Login from '../login/login'
import { PostList,PostEdit,PostCreate  } from '../posts';
import { UserList } from '../users';
import MyLayout from '../MyLayout';
import Dashboard from './Dashboard';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import './admin.css';
import authClient from '../authClient'
import adminsidemenu from '../adminsidemenu'
import { Delete } from 'admin-on-rest';
class AttendenceAdmin extends Component 

 { 
     



     render(){

        return (
      
    <Admin authClient={authClient} dashboard={Dashboard} title="Attendence Admin" restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')} >
      
        <Resource name="posts" list={PostList} icon={PostIcon} edit={PostEdit} create={PostCreate} remove={Delete}/>
        <Resource name="users" list={UserList} icon={UserIcon} />
       
        
    </Admin>
    
 )
   
}

};



export default AttendenceAdmin;