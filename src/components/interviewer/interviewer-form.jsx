var Field = require('../field');
var React = require('react');
var LanguageChooser = require('../language-chooser');


var InterviewerForm = React.createClass({

  getFormData: function(){
    return ({'name':this.refs.name.value,
             'email':this.refs.email.value,
             'experience': this.refs.experience.value,
             'language': this.refs.language.value,
             'key':this.getDefaultValue("key")});
  },

  getDefaultValue:  function(name, dValue=''){
    return this.props.data ? this.props.data[name] : dValue;
  },

  render: function(){
    return (
      <form onSubmit={this.props.handleSubmit} method="post">
        <Field lname='Name' id='name' ref='name' dValue={this.getDefaultValue('name')}></Field>
        <Field lname='Email' id='email' ref='email' dValue={this.getDefaultValue('email')}></Field>
        <LanguageChooser ref="language" name='Language' dValue={this.getDefaultValue('language',[])} defaultText='-- Select Languages --' />
        <Field lname='Experience' id='experience' ref='experience' dValue={this.getDefaultValue('experience')}></Field>
          <ul className="button-group even-2">
            <li><input type='submit' id='submit' className="button radius" value="Save"/></li>
            <li><a href="/#/interviewers" className="button radius">View All</a></li>
          </ul>

      </form>
    );
  }
});

module.exports = InterviewerForm;