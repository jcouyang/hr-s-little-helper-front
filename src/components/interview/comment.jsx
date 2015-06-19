var React = require('react');
var Field = require('../Field');

var Comment = React.createClass({

  _handleDelete: function(){
    this.props.deleteComment(this.props.index);
  },

  _handleBlur: function(e){
    this.props.changeComment(this.props.index, e.target.value);
  },
  getInitialState: function() {
    return {value: this.props.dValue};
  },
  _handleChange: function(e){
    this.setState({value: e.target.value});
  },
  render: function() {
    return (
      <div className="row collapse">
        <div className="small-11 columns">
          <input className='edit-input' type="text" value={this.state.value} onChange={this._handleChange} onBlur={this._handleBlur}></input>
        </div>
        <div className="small-1 columns">
          <span className="icon-delete-mid" onClick={this._handleDelete}></span>
        </div>
      </div>
    )
  },
});
module.exports = Comment;