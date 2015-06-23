let React = require('react'),
    Selector = require('./selector'),
    List = require('./list'),
    store = require('../store'),
    m = require('mori'),
    PureRenderMixin = require('react/addons').addons.PureRenderMixin;

let Chooser = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    var initdata = m.set();
    if (this.props.dValue) {
     initdata = m.into(m.set(), m.toClj(this.props.dValue))
    }
    return {
      selected: initdata
    }
  },
  _handleSelect: function(e) {
    let data = e.target.selectedOptions[0].dataset;
    if (data.key) {
      this.setState({
        selected: m.conj(this.state.selected,
                         m.hashMap('name', data.name,
                                   'email', data.email,
                                   'key', data.key)
        )
      },function() {
        this.value = m.intoArray(m.map(s=>m.get(s,'key'), this.state.selected));
        this.interviewers = this.state.selected;
        this.props.cb();
      });
    }
  },
  _handleDelete: function(e) {
    let data = e.target.dataset;
    if (data.key) {
      this.setState({
        selected: m.filter(interviewer=>m.get(interviewer, 'key')!=data.key, this.state.selected)
      },function() {
        this.value = m.intoArray(m.map(s=>m.get(s,'key'), this.state.selected));
        this.interviewers = this.state.selected;
        this.props.cb();
      });
    }
  },
  _dataFetcher: function() {
    return store.allInterviewers();
  },
  render: function() {
    return (
      <div>
        <List data={this.state.selected} onDelete={this._handleDelete} name="Selected Interviewer" />
        <Selector name="Interviewer" dataFetcher={this._dataFetcher} defaultText='--select interviewer--' onChange={this._handleSelect}/>
      </div>
    )
  }
})
module.exports = Chooser;
