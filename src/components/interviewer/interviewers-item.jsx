var React = require('react');
var store = require('../../store');

var Interviewer = React.createClass({

  interviewer_key: function(){
    return this.props.interviewer.key;
  },

  delInterviewer: async function(){
    if (confirm("do you want to delete")){
      var resp = await store.deleteInterviewer(this.interviewer_key());
      if (resp.entity == true){
        console.log('Delete Successfule');
      }
      this.props.deleteCallback();
    }
  },
  render: function(){
    var languages = this.props.interviewer.language.toString()
  	return (
  	  <tr key={this.props.interviewer.key}>
  	    <td><a href={"#/interviewer/show/"+this.props.interviewer.key}>{this.props.interviewer.name}</a></td>
  	    <td>{(this.props.interviewer.avg_score*100).toFixed(2)}%</td>
  	    <td>{this.props.interviewer.email}</td>
  	    <td>{languages}</td>
  	    <td>{this.props.interviewer.experience}</td>
  	    <td>
  	      <ul className="button-group even-2">
  	      <li><a className="button radius small" href={`#/interviewer/${this.interviewer_key()}`}>Update</a></li>
  	      <li><button className="radius small" onClick={this.delInterviewer}>Delete</button></li>
  	      </ul>
  	    </td>
  	  </tr>
  	  )
  }
});

module.exports = Interviewer;