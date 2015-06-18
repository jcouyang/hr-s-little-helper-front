var React = require('react');
var Field = require('../Field');

var Comment = React.createClass({

  _handleDelete: function(){
    this.props.deleteComment(this.props.index);
  },

  _handleChange: function(e){
    if (e.keyCode == 13){
      this.props.changeComment(this.props.index, e.target.value);
    }
  },

  render: function() {
    return (
      <div className="row collapse">
        <div className="small-11 columns">
          <input className='edit-input' type="text" defaultValue={this.props.dValue} onKeyDown={this._handleChange}></input>
        </div>
        <div className="small-1 columns">
          <span className="icon-delete-mid" onClick={this._handleDelete}></span>
        </div>
      </div>
    )
  },
});
module.exports = Comment;