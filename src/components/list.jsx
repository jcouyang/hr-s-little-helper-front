let React = require('react'),
    m = require('mori');
let List = React.createClass({
  render:function() {
    let items = m.map(d=>(
      <li>
        <span className="radius label icon-delete"
              data-email={m.get(d,'email')}
              data-key={m.get(d,'key')}
              onClick={this.props.onDelete}>
          {m.get(d,'name')}
        </span>
      </li>),
    this.props.data);

    return (
      <label>{this.props.name}
        <ul className="inline-list">
          {m.intoArray(items)}
        </ul>
      </label>
    )
  }
})
  module.exports = List;
