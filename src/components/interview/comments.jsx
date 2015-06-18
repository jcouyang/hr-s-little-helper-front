let React = require('react'),
    m = require('mori'),
    CommentList = require('./comment-list');

var Comments = React.createClass({

  _deleteComment: function(index){
    this.setState({
      comments: m.filter(function(comment){return m.get(comment,'index')!=index},this.state.comments)
    });
  },

  _changeComment: function(index,value){
    var changedComment = m.nth(this.state.comments,index);
    changedComment = m.assoc(changedComment, 'value', value);
    this.setState({
      comments: m.assoc(this.state.comments, index, changedComment)
    });
  },


  _arrayToMori: function(commentValues){
    return m.toClj(
                   commentValues.map((value,index)=>{return {value: value, index: index, key: index}})
                   )
  },

  _generateUniqueKey: function(){
    return Date.now();
  },

  _addComment: function(){
    var commentValues = m.intoArray(m.map((comment)=>m.get(comment, 'value'),this.state.comments));
    commentValues.push('')
    this.setState({
      comments: this._arrayToMori(commentValues)
    });
  },

  getInitialState: function() {
    var baseKey = this._generateUniqueKey();
    return {comments: this._arrayToMori(this.props.comments)}
  },

  render: function() {
    return (
      <div className='row collapse comments'>
        <label>{this.props.title}<span className='icon-plus small-offset-1' onClick={this._addComment}></span></label>
        <CommentList key={this._generateUniqueKey()} comments={this.state.comments} changeComment={this._changeComment} deleteComment={this._deleteComment}></CommentList>
      </div>

    )
  },
});
module.exports = Comments;
