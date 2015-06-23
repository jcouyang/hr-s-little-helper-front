var React = require('react'),
    store = require('../store');

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

  _handleDelete: async function(e){
    if (confirm('Do you confirm to delete this interview')){
        var key = e.target.dataset.key;
        await store.deleteInterview(key);
    }
    this._refreshData()
  },

  render: function(){
    let body = this.state.interviews.map(interview=>{
      return (
        <tr>
          <td><a href={"#/interview/"+interview.key}>{interview.description}</a></td>
          <td>{interview.name}</td>
          <td><button data-key={interview.key} className='tiny' onClick={this._handleDelete}>Delete</button></td>
        </tr>
      )
    })
	    return (
        <div className="row">
          <div className="small-12 small-centered medium-8 medium-centered columns">
            <h1>Interviews</h1>
            <table summary="All interviews">
	 		        <thead>
			          <td width="500">Description</td>
                      <td width="200">Name</td>
                      <td width="200">Operations</td>
		          </thead>
	  	        <tbody>
                {body}
              </tbody>
	          </table>
          </div>
        </div>
	  );
	}
});

module.exports = Interviews;
