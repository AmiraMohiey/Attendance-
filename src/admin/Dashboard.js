import React  ,{Component}from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { NumberField }  from 'admin-on-rest';
export default class dashboardclass  extends Component 
{
    constructor(props) {
    super(props);
    this.saverule = this.saverule.bind(this);
  }
saverule(){
    console.log("save")
    var time=this.refs.times.getValue();
    var grade=this.refs.grades.getValue();
    console.log(time,grade)

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

        <RaisedButton label="Save" primary={true} style={{ margin: '50' }}  onClick={this.saverule}/>
        </div>
    </Card>
    )}}
