var React = require('react');
var Field = require('../Field');
var Comment = require('./comment')

var Comments = React.createClass({

  render: function() {

    var comments = this.props.comments.map((comment)=>{
      		return (<Comment ></Comment>);
    });

    return (
      <div>
        {comments}
      </div>
    )
  },
});
module.exports = Comments;
