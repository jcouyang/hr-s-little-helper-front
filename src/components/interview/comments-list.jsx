let React = require('react'),
    m = require('mori'),
    Comments = require('./comments');

var CommentsList = React.createClass({

  getInitialState: function() {
    this.value = {};
    return null;
  },

  _cbChangeComment: function(key, comments){
    this.value[key] = comments;
  },

  render: function() {
    var commentsList = this.props.interviewers.map((interviewer)=>{
      return (<Comments key={m.get(interviewer,'key')} index={m.get(interviewer,'key')}  title={m.get(interviewer,'name')} cb={this._cbChangeComment} comments={['']}></Comments>);
    });

    return (
      <div>
        {commentsList}
      </div>
    )
  },
});
module.exports = CommentsList;
