var ReadOnlyField = require('../readonly-field');
var InterviewList = require('../interview/interview-list')
var React = require('react');

var InterviewerInfo = React.createClass({

  getDefaultValue:  function(name){
    return this.props.data ? this.props.data[name] : '';
  },

  render: function(){
    return (
    <div>
      <div className='mod-part'>
        <div className='mod-header'>Basic Information</div>
        <div className='row'>
          <ReadOnlyField lname='Name' id='name' dValue={this.props.data.name}></ReadOnlyField>
          <ReadOnlyField lname='Email' id='email' dValue={this.props.data.email}></ReadOnlyField>
          <ReadOnlyField lname='Language' id='language' dValue={this.props.data.language}></ReadOnlyField>
          <ReadOnlyField lname='Experience' id='experience' dValue={this.props.data.experience}></ReadOnlyField>
        </div>
      </div>

      <div className='mod-part'>
        <div className='mod-header'>Interview History</div>
        <InterviewList data={this.props.data.interview_history}></InterviewList>
      </div>
    </div>
    );
  }
});

module.exports = InterviewerInfo;