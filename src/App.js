import React ,{Component}from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {
  Table,
  TableBody,  
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
export default class App extends Component {
constructor(props){

super(props)
this.state={ username:localStorage.getItem('user')}
this.states={ "permission_date":""}
 this.connection()


}


askforpermission(e) {
  if(this.states.permission_date){
    // send permission request
console.log(this.states.permission_date)}
else{

  // console.log(perms)
  // console.log(marks)
}
}
getdatepicker(x,date)
{
  // this.states.permission_date= date.toDateString()
}
logout(){
  console.log("logout")
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location = "/";
}
connection(){ console.log("get user info")
         const token = localStorage.getItem('token');
          const request = new Request('http://localhost:8000/api/users/me', {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`}),
          
        })
         return fetch(request)
            .then(response => {          
              
                return response.json();
            })
            .then(({ user }) => { 
              // perms.push (user['permissions'])
              // marks=user['id']
            console.log("user",user)
        //  console.log("perms ",perms )
        //    console.log("marks ",marks )

        })}
render(){
 if(localStorage.getItem('user')){
 

  return( <MuiThemeProvider>
  
  
  <div >
  <AppBar
    title='Attendance System'
     children={<p   style={{marginLeft: '2%',marginRight: '2%',marginTop: '1.8%',color:'white'}} ><b>logged in as {this.state.username} </b></p>
     
     }
    

    iconElementLeft={<IconButton  > </IconButton>}
    iconElementRight={<FlatButton label="Logout" onTouchTap={this.logout}  />}
   
 />


<div style={{marginLeft: '25%',width: '50%',marginTop: '2%'}}>

  <Card>
    <CardHeader
      title="My deducted Marks"
  
    
    />
   <hr/>
    <CardText >
     5 Marks
    </CardText>
  </Card>
  <br/>
   <Card >
     
    <CardHeader
    
      title="Permissions"  />
   <hr/>
    <CardText >
      <DatePicker hintText="Choose a Date"  minDate={new Date()} onChange={(x, date) => this.getdatepicker(x,date)} />
    </CardText>
     <CardActions>
      <RaisedButton  primary={true} label="Ask for permission" style={{marginBottom:"5%",marginLeft:"70%"}} onTouchTap={this.askforpermission}/>
    
    </CardActions>
  </Card>

 <br/>
  <Card    >
     
    <CardHeader
    
      title="List My permissions"

      actAsExpander={true}
      showExpandableButton={true}
    />
      <hr/>
    <CardText expandable={true}>
 <Table>
  

     
    <TableBody displayRowCheckbox={false}>
    
        {/*{ console.log(permList)}*/}

     
    
      
    </TableBody>
  </Table>
    </CardText>
  </Card>


</div>

  </div>
  </MuiThemeProvider>)
}
else{window.location = "/";}
}
}