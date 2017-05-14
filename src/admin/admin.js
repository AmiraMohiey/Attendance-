
import myApiRestClient from '../restClient';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'react-bootstrap';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { AppBar,Title } from 'admin-on-rest';
import { App } from '../App';
import Login from '../login/login'
import { BranchList,BranchEdit,BranchCreate  } from '../branches';
import {TrackList,TrackCreate,TrackEdit} from '../tracks'
import { UserList,UserCreate,UserEdit } from '../users';
import MyLayout from '../MyLayout';
import Dashboard from './Dashboard';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import TrackIcon from 'material-ui/svg-icons/communication/import-contacts';
import './admin.css';
import authClient from '../authClient'
import adminsidemenu from '../adminsidemenu'
import { Delete } from 'admin-on-rest';
class AttendenceAdmin extends Component 

 { 
     



     render(){

        return (
      
    <Admin authClient={authClient} dashboard={Dashboard} title="Attendance Admin" restClient={myApiRestClient} >
        <Resource name="branches" list={BranchList} icon={PostIcon} edit={BranchEdit} create={BranchCreate} remove={Delete}/>
        <Resource name="tracks" list={TrackList} icon={TrackIcon} edit={TrackEdit} create={TrackCreate} remove={Delete}/>
        <Resource name="users" list={UserList} icon={UserIcon} edit={UserEdit} create={UserCreate} remove={Delete}/>
       
        
    </Admin>
    
 )
   
}

};



export default AttendenceAdmin;