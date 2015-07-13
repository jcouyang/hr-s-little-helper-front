var React = require('react');

var InterviewersListBody = require('./interviewer/interviewers-body');

var InterviewersList = React.createClass({
	render: function(){
	 return (
	 	<table summary="All interviewers">
	 		<thead>
			    <td width="200">Name</td>
			    <td width="200">Score</td>
			    <td width="500">Email</td>
			    <td width="500">Language</td>
			    <td width="200">Experience</td>
			    <td width="300">Opertions</td>
		    </thead>
	  	    <InterviewersListBody/>
	  </table>
	 );
	}
});

module.exports = InterviewersList;
