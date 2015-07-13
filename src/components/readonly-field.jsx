var React = require('react');
var ReadOnlyField = React.createClass({

  render: function(){
    return (
      <div className='columns large-6'>
        <div className='row'>
        <span className='columns large-5 lbl'>{this.props.lname}</span>
        <span id={this.props.id} className='columns large-7'>{this.props.dValue}</span>
        </div>
      </div>
    );
  }
});
module.exports = ReadOnlyField;
