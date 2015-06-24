var React = require('react');
var store = require('../store');

var InterviewerItem = require('./interviewers-item');

var InterviewersListBody = React.createClass({

  _getAllInterviews: async function(){
    var resp = await store.allInterviewers();
    this.setState({interviewers: resp.entity});
  },

  getInitialState: function(){
    return {interviewers: []};
  },

  render: function(){
  	var interviewerItems = this.state.interviewers.map((interviewer)=>{
  		return <InterviewerItem key={interviewer.key} interviewer={interviewer} deleteCallback={this._getAllInterviews}></InterviewerItem>;
  	});
  	return (
  		<tbody className='list-body'>
  		{interviewerItems}
  		</tbody>
  	);
  },
  componentDidMount: function(){
    this._getAllInterviews();
  }

});

module.exports = InterviewersListBody;