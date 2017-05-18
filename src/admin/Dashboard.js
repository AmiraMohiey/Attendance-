import React  ,{Component}from 'react';
import { Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { ImageField } from 'admin-on-rest';
import { SelectField } from 'admin-on-rest';
import {FormGroup ,ControlLabel,FormControl} from 'react-bootstrap'
export default class dashboardclass  extends Component 
{
    constructor(props) {
    super(props);
    this.state={tracks:[],imgurl:"",selectValue:""}
    this.getcode = this.getcode.bind(this);
    this.gettracks = this.gettracks.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.gettracks()
  }
  gettracks(){
        const token = localStorage.getItem('token');

 const request = new Request('https://symfonict.herokuapp.com/api/tracks', {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json','Authorization': `Bearer ${token}` }),
          
        })
         return fetch(request)
            .then(response => {     
                console.log(response)     
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
             
                return response.json();
            }).then(({data}) => {
             
                this.setState({tracks:data})
            })


  }

     handleChange(e){
    this.setState({selectValue:e.target.value},()=>{console.log("value",this.state.selectValue)});
  }
getcode(){
     const token = localStorage.getItem('token');


         const request = new Request('https://symfonict.herokuapp.com/api/qr/getQR/'+this.state.selectValue, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json','Authorization': `Bearer ${token}` }),
          
        })
         return fetch(request)
            .then(response => {     
               
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                   
                return response.json();
            }).then(({image})=>{this.setState({imgurl:image})})
  

   

}
render (){
    
    return (
    <Card>
       <div className="dashboarddiv">
           <br/>
        <h2> Qrcodes</h2>
        <hr/>
 
<div>    
    
   



{/*
 <FormGroup controlId="formControlsSelect">*/}
     <div style={{width:'50%',marginLeft:'25%'}}>
      <ControlLabel>Choose Track </ControlLabel>
      <FormControl componentClass="select" placeholder="select" value={this.state.selectValue} 
        onChange={this.handleChange} >
<option value=""   ></option>

 {this.state.tracks.map(function(object, i){
     console.log(object)
        return (<option value={object.id}   key={i}>{object.name}</option>);
    })}


     
      </FormControl>
    </div>


 { this.state.selectValue ?

        <RaisedButton label="get code" primary={true} style={{ margin: "3em" }}  onClick={this.getcode}/>:
         <RaisedButton label="get code" primary={true} style={{ margin: "3em" }}  onClick={this.getcode} disabled/>
 }
       </div>

  { this.state.imgurl ?  

        <img src={this.state.imgurl}  height="250" width="250"/>: <p></p>
        }
        </div>
    </Card>
    )}}
