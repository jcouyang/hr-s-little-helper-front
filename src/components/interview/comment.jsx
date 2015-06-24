var React = require('react');
var Field = require('../field');

var Comment = React.createClass({

  _handleDelete: function(){
    this.props.deleteComment(this.props.index);
  },

  _handleBlur: function(e){
    this.props.changeComment(this.props.index, e.target.value);
  },
  getInitialState: function() {
    return {value: this.props.dValue,
            score: 1};
  },
  _handleChange: function(e){
    this.setState({value: e.target.value});
  },
  _handleAddScore: function(e){
    this.setState({score: this.state.score+1});
  },
  _handleReduceScore: function(e){
    this.setState({score: this.state.score-1});
  },
  render: function() {
    return (
      <div className="row collapse">
        <div className="small-10 columns">
          <input className='edit-input' type="text" value={this.state.value} onChange={this._handleChange} onBlur={this._handleBlur}></input>
        </div>
        <div className="small-1 columns">
          <span className={'label '+ (this.state.score >= 0 ? 'success': 'alert')}>{this.state.score}</span>
        </div>
        <div className="small-1 columns">
          <span className="icon-delete-mid" onClick={this._handleDelete}></span>
        </div>
        <div className="small-1 columns">
          <span className="icon-thumbs-o-up" onClick={this._handleAddScore}></span>
        </div>
        <div className="small-1 columns">
          <span className="icon-thumbs-o-down" onClick={this._handleReduceScore}></span>
        </div>

      </div>
    )
  },
});
module.exports = Comment;