let React = require('react'),
    m = require('mori'),
    CommentList = require('./comment-list');

var Comments = React.createClass({

  _deleteComment: function(key){
    this.setState({
      comments:m.filter(function(comment){return m.get(comment,'key')!=key},this.state.comments)
    });
  },
  _addComment: function(){
//    m.conj(this.state.comments,m.last(this.state.comments))
  },

  getInitialState: function() {
    return {comments: m.toClj(
        this.props.comments.map((value,index)=>{return {value: value,key: index}})
        )};
  },

  render: function() {

    return (
      <div className='row collapse comments'>
        <label>{this.props.title}<span className='icon-plus small-offset-1' onClick={this._addComment}></span></label>
        <CommentList comments={this.state.comments} deleteComment={this._deleteComment}></CommentList>
      </div>

    )
  },
});
module.exports = Comments;
