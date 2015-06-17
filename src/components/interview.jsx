var React = require('react'),
    store = require('../store'),
    Form = require('./form'),
    Field = require('./field'),
    Chooser = require('./chooser');

var Interview = React.createClass({
  getInitialState: function() {
    return {status:-1}
  },
  _handleSubmit: async function(e){
    e.preventDefault();
    var resp = await store.newInterview(
      {
        'description':this.refs.description.value,
        'interviewers': this.refs.chooser.value,
        'date':this.refs.date.value,
        'name':this.refs.name.value
      });
    this.setState({
      status: resp.status.code
    })
  },
  render: function() {
    return (
      <Form onSubmit={this._handleSubmit} method="post" title="Create Interview" status={this.state.status}>
        <Field lname='Description' ref="description"></Field>
        <Field lname='Interviewee Name' ref="name"></Field>
        <Field type="date" lname='Date' ref="date"></Field>
        <Chooser ref="chooser"/>
        <input type='submit' id='submit' className="button" value="Create"/>
      </Form>
    )
  },
});
module.exports = Interview;