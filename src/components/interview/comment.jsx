var React = require('react');
var Field = require('../Field');

var Comment = React.createClass({
  render: function() {
    return (
      <div className="row collapse">
        <div className="small-11 columns">
          <input type="text"></input>
        </div>
        <div className="small-1 columns">
          <span className="icon-delete-mid" onClick={this._deleteComment}></span>
        </div>
      </div>
    )
  },
});
module.exports = Comment;