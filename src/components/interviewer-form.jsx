var Field = require('./field');
var React = require('react');


var InterviewerForm = React.createClass({

  getFormData: function(){
    return ({'name':this.refs.name.value,
             'email':this.refs.email.value,
             'key':this.getDefaultValue("key")});
  },

  getDefaultValue:  function(name){
    return this.props.data ? this.props.data[name] : '';
  },

  render: function(){
    return (
      <form onSubmit={this.props.handleSubmit} method="post">
        <Field lname='Name' id='name' ref='name' dValue={this.getDefaultValue('name')}></Field>
        <Field lname='Email' id='email' ref='email' dValue={this.getDefaultValue('email')}></Field>
        <Field lname='Tel.' id='tel' ref='tel' dValue=''></Field>
        <input type='submit' id='submit' className="button radius" value="Save"/>
      </form>
    );
  }
});

module.exports = InterviewerForm;