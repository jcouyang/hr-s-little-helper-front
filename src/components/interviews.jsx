var React = require('react'),
    store = require('../store'),
    InterviewList = require('./interview/interview-list');

var Interviews = React.createClass({
  getInitialState: function() {
    return {
      interviews: []
    }
  },

  _refreshData: async function(){
    var interviews;
    if(this.props.keyword){
      interviews = await store.queryInterviews(this.props.keyword)
    }else{
      interviews = await store.interviews();
    }
    this.setState({
            interviews: interviews.entity
          })
  },
  componentDidMount: function() {
    this._refreshData()
  },
  componentWillUpdate: async function(nextpro, _) {
    if(this.props.keyword!=nextpro.keyword){
      var interviews = await store.queryInterviews(nextpro.keyword);
      this.setState({
        interviews: interviews.entity
      })
    }
  },

  _handleDelete: async function(key){
    if (confirm('Do you confirm to delete this interview')){
        await store.deleteInterview(key);
    }
    this._refreshData()
  },

  render: function(){
    return(
      <div>
        <h2 className='center-title'>Interviews</h2>
        <InterviewList data={this.state.interviews} deleteHandler={this._handleDelete}></InterviewList>
      </div>
    );
  }
});

module.exports = Interviews;
