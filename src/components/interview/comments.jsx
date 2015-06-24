let React = require('react'),
    m = require('mori'),
    Comment = require('./comment');

var Comments = React.createClass({

  _refreshData: function(){
    var commentDatas = m.remove((value)=>m.get(value,'content')=='',
                                 m.map((comment)=>m.get(comment,'value'),
                                      this.state.comments
                                    )
                               );

    this.props.cb(this.props.index, m.toJs(commentDatas));
  },

  _deleteComment: function(index){
    this.setState({
      comments: m.filter((comment)=>m.get(comment,'index')!=index,
                         this.state.comments
                        )
    },this._refreshData);
  },

  _changeComment: function(index,commentKey,value){
    var changedComment = m.nth(this.state.comments,index);
    changedComment = m.assocIn(changedComment, ['value',commentKey], value);
    this.setState({
      comments: m.assoc(this.state.comments, index, changedComment)
    },this._refreshData);
  },

  _arrayToMori: function(commentValues){
    var baseKey=Date.now();
    return m.toClj(
                   commentValues.map((value,index)=>{return {value: value, index: index, key: baseKey+"_"+index}})
                  );
  },

  _addComment: function(){
    var commentValues = m.intoArray(m.map((comment)=>m.get(comment, 'value'),this.state.comments));
    commentValues.push(m.hashMap('content','','score',0))
    this.setState({
      comments: this._arrayToMori(commentValues)
    },this._refreshData);
  },

  getInitialState: function() {
    return {comments: this._arrayToMori(this.props.comments)}
  },

  render: function() {
    var comments = m.intoArray(this.state.comments).map((comment)=>{
          return (<Comment key={m.get(comment,'key')} index={m.get(comment,'index')} dValue={m.get(m.get(comment,'value'),'content')} score={m.get(m.get(comment,'value'),'score')} changeComment={this._changeComment} deleteComment={this._deleteComment}></Comment>);
        });
    return (
      <div className='collapse comments'>
        <label>{this.props.title}<span className='icon-plus small-offset-1' onClick={this._addComment}></span></label>
        {comments}
      </div>
    )
  },
});
module.exports = Comments;
