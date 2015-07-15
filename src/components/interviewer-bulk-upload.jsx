let React = require('react');
let m = require('mori');
let when = require('when');
let store = require('../store');
let xf = require('./interviewer-bulk-upload.process');
let InterviewerUpload = React.createClass({
  getInitialState: function() {
    return {
      bulkUploaded: false
    }
  },
  _handleFiles: function(e) {
    let reader = new FileReader();
    reader.onload = function(e) {
      let csv = Papa.parse(e.target.result);
      if(csv.errors.length==0){
        let [header,...rows] = csv.data;
        let forms = m.into(m.vector(), xf(header), rows);
        when(m.toJs(m.map(form=>store.newInterviewer(m.toJs(form)),forms))).then(
          ()=>this.setState({bulkUpdated:true})
        )
      }
    }.bind(this)
    reader.readAsText(e.target.files[0]);
  },
  render: function() {
    let msg = <h3></h3>;
    if(this.state.bulkUpdated) msg =( <h3>Uploaded.</h3>)
      return (
        <div>
      <input type="file" id="input" onChange={this._handleFiles}/>
      {msg}
        </div>
    )
  }
});
module.exports = InterviewerUpload;
