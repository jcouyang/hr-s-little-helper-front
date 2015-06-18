let React = require('react'),
    m = require('mori'),
    Comment = require('./comment');

var Comments = React.createClass({
  render: function() {
    var comments = m.intoArray(this.props.comments).map((comment)=>{
      return (<Comment index={m.get(comment,'index')} dValue={m.get(comment,'value')} changeComment={this.props.changeComment} deleteComment={this.props.deleteComment}></Comment>);
    });

    return (
      <div>
        {comments}
      </div>
    )
  },
});
module.exports = Comments;
