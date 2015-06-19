var React = require('react'),
    store = require('../store'),
    Form = require('./form'),
    Field = require('./field'),
    Chooser = require('./chooser'),
    CommentsList = require('./interview/comments-list');

var Interview = React.createClass({
  getInitialState: function() {
    return {
      status:-1
    }
  },
  data: function() {
    return this.props.data||{
        name:"",
        description: "",
        date: "",
        interviewers: []
      }
  },
  _handleSubmit: async function(e){
    e.preventDefault();
    let interviewEntity = {
      'description':this.refs.description.value,
      'interviewers': this.refs.chooser.value,
      'date':this.refs.date.value,
      'name':this.refs.name.value
    }
    var resp
    if(this.props.data){
      resp = await store.editInterview(this.props.data.id, interviewEntity);
    }else{
      resp= await store.newInterview(interviewEntity);
    }
    this.setState({
      status: resp.status.code
    })
  },
  _cbChangeInterviewer: function(){
    this.setState({selectedInterviewers: this.refs.chooser.interviewers})
  },
  _cbChangeComment: function(key, comments){
    this.commentsList[key] = comments;
  },
  render: function() {
    return (
      <Form onSubmit={this._handleSubmit} method="post" title="Create Interview" status={this.state.status}>
        <Field lname='Description' ref="description" dValue={this.data().description}></Field>
        <Field lname='Interviewee Name' ref="name" dValue={this.data().name}></Field>
        <Field type="date" lname='Date' ref="date" dValue={this.data().date}></Field>
        <Chooser ref="chooser" dValue={this.data().interviewers}/>
        <CommentsList interviewers={this.state.selectedInterviewers} cb={this._cbChangeComment}></CommentsList>
        <input type='submit' id='submit' className="button" value="Create"/>

      </Form>
    )
  },
});
module.exports = Interview;
