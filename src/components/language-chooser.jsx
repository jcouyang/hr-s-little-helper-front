let React = require('react'),
    LanguageList = require('./language-list'),
    m = require('mori'),
    PureRenderMixin = require('react/addons').addons.PureRenderMixin;

let LanguageChooser = React.createClass({
  mixins: [PureRenderMixin],

  getInitialState: function() {
    this.value = m.intoArray(this.props.dValue);
    return {
      selected : m.set(this.props.dValue)
    }
  },
  _getAllLanguages: function(){

    var languages = ['Java', 'Ruby', 'JS', 'Python', 'Scala'].sort();
    var allLanguages =['All'].concat(languages)
    allLanguages.push('Others')
    return allLanguages;
  },
  _handleSelect: function(e) {
    let value = e.target.value;
    if (value != '') {
      this.setState({
        selected: m.conj(this.state.selected, value)
      },function() {
        this.value = m.intoArray(this.state.selected);
      });
    }
  },
  _handleDelete: function(value) {
    this.setState({
      selected: m.disj(this.state.selected, value)
    },function() {
      this.value = m.intoArray(this.state.selected);
    });
  },
  render: function() {
    var options = this._getAllLanguages().map(language=>(
                <option value={language} key={language}>{language}</option>))
              options = [<option value='' key=''>{this.props.defaultText}</option>].concat(options);
    return (
      <div>
        <LanguageList data={this.state.selected} onDelete={this._handleDelete} name="Selected Languages" />
        <label>{this.props.name}
          <select onChange={this._handleSelect}>
            {options}
          </select>
        </label>
      </div>
    )
  }
})
module.exports = LanguageChooser;
