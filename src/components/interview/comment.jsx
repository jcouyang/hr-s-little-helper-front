var React = require('react');
var Field = require('../Field');

var Comment = React.createClass({

  _handleDelete: function(){
    this.props.deleteComment(this.props.index);
  },

  render: function() {
    return (
      <div className="row collapse">
        <div className="small-11 columns">
          <input type="text"></input>
        </div>
        <div className="small-1 columns">
          <span className="icon-delete-mid" onClick={this._handleDelete}></span>
        </div>
      </div>
    )
  },
});
module.exports = Comment;