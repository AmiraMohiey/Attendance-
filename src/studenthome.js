import React from 'react';
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
var permission_date=''


function askforpermission(e) {
  if(permission_date){
    // send permission request
console.log(permission_date)}
else{

  // alert choosedate
}
}


function getdatepicker(x,date)
{
  permission_date= date.toDateString()
}


function logout(){
  console.log("logout")
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location = "/";
}


 export default function StudentHome () {  
   
if(localStorage.getItem('user')){
  var marks=5

 var perms = ['12-3-2017', '20-4-2017', '1-5-2017'];
        var permList = perms.map(function(perm,i){
                        return   <TableRow  key={i}>
        <TableRowColumn>{perm }</TableRowColumn>

      </TableRow>;
                      })


    var username=localStorage.getItem('user')
   return(  <div >
  <AppBar
    title='Attendance System'
     children={<p   style={{marginLeft: '2%',marginRight: '2%',marginTop: '1.8%',color:'white'}} ><b>logged in as {username} </b></p>
     
     }
    

    iconElementLeft={<IconButton  > </IconButton>}
    iconElementRight={<FlatButton label="Logout" onTouchTap={logout}  />}
   
 />

 {/*<h1>Student home </h1>*/}
<div style={{marginLeft: '25%',width: '50%',marginTop: '2%'}}>

  <Card>
    <CardHeader
      title="My deducted Marks"
  
    
    />
   <hr/>
    <CardText >
     {marks} Marks
    </CardText>
  </Card>
  <br/>
   <Card >
     
    <CardHeader
    
      title="Permissions"  />
   <hr/>
    <CardText >
      <DatePicker hintText="Choose a Date"  minDate={new Date()} onChange={(x, date) => getdatepicker(x,date)} />
    </CardText>
     <CardActions>
      <RaisedButton  primary={true} label="Ask for permission" style={{marginBottom:"5%",marginLeft:"70%"}} onTouchTap={askforpermission}/>
    
    </CardActions>
  </Card>

 <br/>
  <Card>
     
    <CardHeader
     
      title="List My permissions"
  
      actAsExpander={true}
      showExpandableButton={true}
    />
      <hr/>
    <CardText expandable={true}>
 <Table>
  

     
    <TableBody displayRowCheckbox={false}>
    
        {permList}

     
    
      
    </TableBody>
  </Table>
    </CardText>
  </Card>


</div>

  </div>
    ) }

else {


 window.location = "/";

}
}
