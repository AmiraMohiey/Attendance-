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

        <RaisedButton label="Save" primary={true} style={{ margin: "3em" }}  onClick={this.saverule}/>
        </div>
    </Card>
    )}}
