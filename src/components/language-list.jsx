let React = require('react'),
    m = require('mori');
let LanguageList = React.createClass({
  _handleDelete: function(e){
    this.props.onDelete(e.target.dataset.key)
  },

  render:function() {
    let items = m.map(l=>(
      <li>
        <span className="radius label icon-delete"
              data-key={l}
              onClick={this._handleDelete}>
          {l}
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
  module.exports = LanguageList;
