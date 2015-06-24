var React = require('react');

var Welcome = require('./navigation/welcome')
var Search = require('./navigation/search')
var Add = require('./navigation/add')
var View = require('./navigation/view')

var HRNavigation = React.createClass({
  _currentDate: function(){
    var current = new Date();
    return `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
  },
  render: function(){
    return (
    <nav className="top-bar" data-topbar role="navigation" >
      <Welcome></Welcome>

      <section className="top-bar-section">
        <ul className='left'>
          <Add></Add>
        </ul>

        <ul className='left'>
          <View></View>
        </ul>

        <ul className='left'>
          <li className="has-form">
            <Search></Search>
          </li>
        </ul>

        <ul className="right">
          <li ><a href='#'>{this._currentDate()}</a></li>
        </ul>
      </section>
    </nav>
    );
  }
});

module.exports = HRNavigation;