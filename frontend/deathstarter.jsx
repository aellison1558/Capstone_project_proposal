var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/ApiUtil'),
    ProjectStore = require('./stores/ProjectStore');
window.ApiUtil = ApiUtil;
window.ProjectStore = ProjectStore;

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<div>React Frontend</div>, document.getElementById('root'));
})
