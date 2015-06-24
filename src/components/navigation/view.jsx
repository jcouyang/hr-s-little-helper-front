var React = require('react');

var View = React.createClass({
  render: function(){
    return (
       <li className="has-dropdown not-click" >
         <a href="#">View All</a>
         <ul className="dropdown">
           <li className="active"><a href="#/interviewers">Interviewers</a></li>
           <li><a href="#/interviews">Interviews</a></li>
         </ul>
       </li>
    );
  }
});

module.exports = View;