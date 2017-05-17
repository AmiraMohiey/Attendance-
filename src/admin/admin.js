
import myApiRestClient from '../restClient';
import React, { Component } from 'react';
import { simpleRestClient,fetchUtils, Admin, Resource } from 'admin-on-rest';
import { BranchList,BranchEdit,BranchCreate  } from '../branches';
import {TrackList,TrackCreate,TrackEdit} from '../tracks'
import { UserList,UserCreate,UserEdit } from '../users';
import { RuleList,RuleCreate,RuleEdit } from '../rules';
import Dashboard from './Dashboard';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import TrackIcon from 'material-ui/svg-icons/communication/import-contacts';
import './admin.css';
import authClient from '../authClient'
import RuleIcon from 'material-ui/svg-icons/action/event'
import { Delete } from 'admin-on-rest';
class AttendenceAdmin extends Component 

 { 
     



     render(){
     const httpClient = (url, options = {}) => {
      if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
                             }
    const token = localStorage.getItem('token');
     options.headers.set('Authorization', `Bearer ${token}`);
     return fetchUtils.fetchJson(url, options)
                                               }
        return (
      
    <Admin authClient={authClient} title="Attendance Admin" restClient={ myApiRestClient} >
        <Resource name="rules" list={RuleList} icon={RuleIcon} edit={RuleEdit} create={RuleCreate} remove={Delete}/>    

        <Resource name="branches" list={BranchList} icon={PostIcon} edit={BranchEdit} create={BranchCreate} remove={Delete}/>    
        <Resource name="tracks" list={TrackList} icon={TrackIcon} edit={TrackEdit} create={TrackCreate} remove={Delete}/>
        <Resource name="users" list={UserList} icon={UserIcon} edit={UserEdit} create={UserCreate} remove={Delete}/>
       
        
    </Admin>
    
 )
   
}

};



export default AttendenceAdmin;