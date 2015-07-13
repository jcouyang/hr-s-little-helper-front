var React = require('react')

var InterviewList = React.createClass({

  _handleDelete: function(e){
    this.props.deleteHandler(e.target.dataset.key)
  },

  render: function(){
    var options;
    var optionsTitle;

    if (this.props.deleteHandler){
      optionsTitle = <td width="500">Operations</td>
    }

    let body = this.props.data.map(interview=>{
      if (this.props.deleteHandler){
          options = <td><button data-key={interview.id} className='tiny' onClick={this._handleDelete}>Delete</button></td>
      }
      return (
        <tr>
          <td><a href={"#/interview/"+interview.id}>{interview.name}</a></td>
          <td>{interview.date}</td>
          <td>{interview.description}</td>
          {options}
        </tr>
      )
    })
	    return (
        <div className="row">
          <div className="columns">
            <table summary="All interviews">
	 		        <thead>
                      <td width="200">Name</td>
                      <td width="200">Date</td>
			          <td width="500">Description</td>
			          {optionsTitle}
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

module.exports = InterviewList;
