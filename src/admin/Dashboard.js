import React  ,{Component}from 'react';
import { Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class dashboardclass  extends Component 
{
    constructor(props) {
    super(props);
    this.saverule = this.saverule.bind(this);
  }
saverule(){
      var time=this.refs.times.getValue();
    var grade=this.refs.grades.getValue();
    if(time && grade){
         const request = new Request('http://localhost:8000/api/rules', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ time, grade}),
        })
         return fetch(request)
            .then(response => {          
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
  
    console.log(time,grade)}
    else{
        
    }

}
render (){
    
    return (
    <Card>
       <div className="dashboarddiv">
           <br/>
        <h2> Attendance Rules</h2>
        <hr/>
        <TextField  ref='times' floatingLabelText="Absence Times"  defaultValue=""/><br/>
        <TextField ref='grades'  floatingLabelText="Grades "/><br/>

        <RaisedButton label="Save" primary={true} style={{ margin: "3em" }}  onClick={this.saverule}/>
        </div>
    </Card>
    )}}
