import React ,{Component}from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
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
this.state={ permission_date:""}
this.state={userid:"",marks:'1'}
this.state={ absence_days:[{date:""}] ,permission_days:[{date:""}],open: false}

this.askforpermission = this.askforpermission.bind(this);
this.getdatepicker = this.getdatepicker.bind(this);
this.logout = this.logout.bind(this);
this.handleClose=this.handleClose.bind(this)
 this.connection()


}

 handleClose = () => {
    this.setState({open: false});
  };
askforpermission() {
  if(this.state.permission_date){
    // send permission request
var date=this.state.permission_date
var user=this.state.userid




  const token = localStorage.getItem('token');
          const request = new Request('http://localhost:8000/api/permissions/', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`}),
            body:JSON.stringify({date,user})
        })
         return fetch(request)
            .then(response => {          
             
                return response.json();
            }).then(({type})=>{ if(type=="sucess"){
              this.setState({open:true})




            }})
  }


else{

  // console.log(perms)
  // console.log(marks)
}
}

getdatepicker(x,date)
{

   this.setState({permission_date:date.toDateString()})
console.log("date",this.state.permission_date)
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
              this.setState({absence_days:user['absencetable']},()=>{console.log(this.state.absence_days)})
              this.setState({permission_days:user['permissions']},()=>{console.log(this.state.permission_days)})
              this.setState({userid:user['id']},()=>{console.log(this.state.userid)})
            console.log("user",user)
        })}
render(){

 if(localStorage.getItem('user')){
 
 const actions = [
      <RaisedButton
        label="OK"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
  
    ];
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
      {console.log(this.state.marks)}
     { this.state.marks } mark
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
    
       {this.state.permission_days.map(function(object, i){
        return (
        
         < TableRow key={i} >
   <TableRowColumn>
        {object.date.split("T")[0]} 


</TableRowColumn>
     </TableRow>
        );
    })}

      
    </TableBody>
  </Table>
    </CardText>
  </Card>
<br/>
 <Card    >
     
    <CardHeader
    
      title="List My absence days"

      actAsExpander={true}
      showExpandableButton={true}
    />
      <hr/>
    <CardText expandable={true}>
 <Table>
  

     
    <TableBody displayRowCheckbox={false}>
 {this.state.absence_days.map(function(object, i){
        return (
        
         < TableRow key={i} >
   <TableRowColumn>
        {object.date.split("T")[0]} 


</TableRowColumn>
     </TableRow>
        );
    })}



 
    
      
    </TableBody>
  </Table>
    </CardText>
  </Card>

</div>






 <div style={{textAlign:'center'}}>
      
        <Dialog
        
          modal={false}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
         <b>permission request has been sent successfully </b>
        </Dialog>
      </div>


  </div>
  </MuiThemeProvider>)
}
else{window.location = "/";}
}
}