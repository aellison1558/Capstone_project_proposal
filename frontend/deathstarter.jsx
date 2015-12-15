var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/ApiUtil');
window.ApiUtil = ApiUtil;

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<div>React Frontend</div>, document.getElementById('root'));
})
