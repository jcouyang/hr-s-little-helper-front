let React = require('react'),
    m = require('mori'),
    Comment = require('./comment');

var Comments = React.createClass({

  _deleteComment: function(index){
    this.setState({
      comments: m.filter((comment)=>m.get(comment,'index')!=index,
                         this.state.comments
                        )
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
    var baseKey=Date.now();
    return m.toClj(
                   commentValues.map((value,index)=>{return {value: value, index: index, key: baseKey+"_"+index}})
                  );
  },

  _addComment: function(){
    var commentValues = m.intoArray(m.map((comment)=>m.get(comment, 'value'),this.state.comments));
    commentValues.push('')
    this.setState({
      comments: this._arrayToMori(commentValues)
    });
  },

  getInitialState: function() {
    return {comments: this._arrayToMori(this.props.comments)}
  },

  render: function() {
    var comments = m.intoArray(this.state.comments).map((comment)=>{
          return (<Comment key={m.get(comment,'key')} index={m.get(comment,'index')} dValue={m.get(comment,'value')} changeComment={this._changeComment} deleteComment={this._deleteComment}></Comment>);
        });
    return (
      <div className='row collapse comments'>
        <label>{this.props.title}<span className='icon-plus small-offset-1' onClick={this._addComment}></span></label>
        {comments}
      </div>
    )
  },
});
module.exports = Comments;
