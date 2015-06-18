let React = require('react'),
    m = require('mori'),
    Field = require('../Field'),
    Comment = require('./comment');

var Comments = React.createClass({
  render: function() {
    var comments = m.intoArray(this.props.comments).map((comment)=>{
      return (<Comment index={m.get(comment,'key')} deleteComment={this.props.deleteComment}></Comment>);
    });

    return (
      <div>
        {comments}
      </div>
    )
  },
});
module.exports = Comments;
