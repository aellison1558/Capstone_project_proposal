var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/ApiUtil'),
    ProjectStore = require('./stores/ProjectStore'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute
    ProjectIndex = require('./components/projects/ProjectIndex'),
    ProjectShow = require('./components/projects/ProjectShow'),
    ProjectForm = require('./components/projects/ProjectForm');


    var App = React.createClass({
      render: function(){
        return(
          <div>
            <header><h1>The DeathSTARter</h1></header>
            {this.props.children}
          </div>
        )
      }
    });

var routes = (
  <Route path="/" component={App}>

    
    <Route path="projects/new" component={ProjectForm} />
  </Route>
);


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
})
