var React = require('react');
var CommentList = require('./comment-list')

var Comments = React.createClass({

  _deleteComment: function(){
    alert('fdfsdf');
  },

  getInitialState: function() {
    return {comments: this.props.comments}
  },

  render: function() {

    return (
      <div className='row collapse comments'>
        <label>{this.props.title}<span className='icon-plus small-offset-1'></span></label>
        <CommentList comments={this.state.comments}></CommentList>
      </div>

    )
  },
});
module.exports = Comments;
