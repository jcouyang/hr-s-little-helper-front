var React = require('react'),
    m = require('mori'),
    store = require('../store'),
    Form = require('./form'),
    Field = require('./field'),
    Chooser = require('./chooser'),
    CommentsList = require('./interview/comments-list');

var Interview = React.createClass({
  getInitialState: function() {
    return ({
      status:-1,
      selectedInterviewers: this.data().comments
    })
  },

  _currentDate: function(){
      var current = new Date();
      var m = current.getMonth()+1;
      m = m>10 ? m : `0${m}`
      var d = current.getDate();
      d = d>10 ? d : `0${d}`
      return `${current.getFullYear()}-${m}-${d}`;
    },

  data: function() {

    return this.props.data||{
        name:"",
        description: "",
        date: this._currentDate(),
        interviewers: [],
        comments: {},
      }
  },
  _handleSubmit: async function(e){
    e.preventDefault();
    let interviewEntity = {
      'description':this.refs.description.value,
      'interviewers': this.refs.chooser.value,
      'date':this.refs.date.value,
      'name':this.refs.name.value,
      'comments':this.refs.comments.value
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
  _arrayToHash: function(interviewers){
    var commentsList ={};
    m.each(interviewers, (interviewer)=>{
                                         if (m.get(interviewer,'key') in this.refs.comments.value){
                                           commentsList[m.get(interviewer,'key')]= {name: m.get(interviewer,'name'), comments:this.refs.comments.value[m.get(interviewer,'key')]};
                                         }
                                         else{
                                           commentsList[m.get(interviewer,'key')]= {name: m.get(interviewer,'name'), comments:[{content:'', score:0}]};
                                         }

                                         });
    return commentsList;

  },

  _cbChangeInterviewer: function(){
    this.setState({selectedInterviewers: this._arrayToHash(this.refs.chooser.interviewers)})
  },
  _cbChangeComment: function(key, comments){
    this.commentsList[key] = comments;
  },
  render: function() {
    return (
      <Form onSubmit={this._handleSubmit} method="post" title={this.props.data ? "Update Interview" : "Create Interview"} status={this.state.status}>
        <Field lname='Description' ref="description" dValue={this.data().description}></Field>
        <Field lname='Interviewee Name' ref="name" dValue={this.data().name}></Field>
        <Field type="date" lname='Date' ref="date" dValue={this.data().date}></Field>
        <Chooser ref="chooser" dValue={this.data().interviewers} cb={this._cbChangeInterviewer}/>
        <CommentsList ref='comments' interviewers={this.state.selectedInterviewers}></CommentsList>
        <input type='submit' id='submit' className="button" value="Save"/>
      </Form>
    )
  },
});
module.exports = Interview;
