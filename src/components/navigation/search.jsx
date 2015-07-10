var React = require('react')

var Search = React.createClass({
  _updateRoute: function(value) {
      location.hash='/search/'+value
  },

  _handleChange: function(e){
    this._updateRoute(e.target.value);
  },

  _handleKeyDown: function(e){
    if (e.keyCode == 13){
      this._updateRoute(e.target.value);
    }
  },

  render: function(){
    return (
      <div className="row collapse">
        <div className="large-13 columns">
          <input type="search" placeholder="Search Interviewee" onKeyDown={this._handleKeyDown} onChange={this._handleChange}></input>
        </div>
      </div>
    );
  }
});

module.exports = Search;
