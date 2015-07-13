var React = require('react');

var Interview = require('./components/interview');
var Interviews = require('./components/interviews');
var Interviewer = require('./components/interviewer');
var InterviewersList = require('./components/interviewers')
var HRNavigation = require('./components/hr-navigation');
var store = require('./store')
var {Router} = require('director');

var appElement = document.getElementById('app');
var navElement = document.getElementById('nav');
React.render(
  		<HRNavigation/>,
  		navElement);

var routes = {
  '/interviewer': {
    '/new': function(){
      React.render(
        <Interviewer title='Create new interviewer'/>,
        appElement);
    },
    '/:interviewID':function(interviewID){
          React.render(
            <Interviewer title='Update new interviewer' id={interviewID}/>,
            appElement);
    },
    '/show/:interviewID':function(interviewID){
          React.render(
            <Interviewer title='Show interviewer' id={interviewID} readonly={true}/>,
            appElement);
    }
  },
  '/interview': {
    '/new': function() {
      React.render(
        <Interview/>,
        appElement);
    },
    '/:id': async function(id) {
      let interview = await store.getInterview(id);
      let data = interview.entity
      data.id=id
      React.render(
        <Interview data={data}/>,
        appElement);
    }

  },
  'interviews': function() {
      React.render(
        <Interviews title='Create new interviews'/>,
        appElement);
    },
    
  '/interviewers':function(){
  	React.render(
  		<InterviewersList/>,
  		appElement);
  },
  '/search/:keyword':function(keyword) {
    React.render(<Interviews keyword={keyword}/>, appElement)
  }
};

var router = Router(routes);

router.init();
