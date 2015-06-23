let React = require('react'),
    m = require('mori'),
    Comments = require('./comments');

var CommentsList = React.createClass({

  getInitialState: function() {
    this.value = this._transferValue(this.props.interviewers);
    return null;
  },

  _transferValue: function(model){
    var value = {};
    Object.keys(model).forEach((key)=>{value[key] = model[key]['comments']});
    return value;
  },

  _cbChangeComment: function(key, comments){
    this.value[key] = comments
  },



  render: function() {
    this.value = this._transferValue(this.props.interviewers);
    var commentsList = Object.keys(this.props.interviewers).map((key)=>{
                                                  var interviewer = this.props.interviewers[key];
                                                  return (
                                                         <Comments key={key}
                                                                   index={key}
                                                                   title={interviewer['name']}
                                                                   cb={this._cbChangeComment}
                                                                   comments={interviewer['comments']}>
                                                         </Comments>
                                                       )}
                                                );

    return (
      <div>
        {commentsList}
      </div>
    )
  },
});
module.exports = CommentsList;
