var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/ApiUtil'),
    ProjectStore = require('./stores/ProjectStore'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute
    CategoryIndex = require('./components/categories/CategoryIndex'),
    CategoryShow = require('./components/categories/CategoryShow'),
    ProjectShow = require('./components/projects/ProjectShow'),
    ProjectForm = require('./components/projects/ProjectForm'),
    Root = require('./components/Root'),
    Navbar = require('./components/Navbar'),
    UserShow = require('./components/users/UserShow');


    var App = React.createClass({
      render: function(){
        return(
          <div>
            <header><h3><Navbar /></h3></header>
            <div className='content'>
              {this.props.children}
            </div>
          </div>
        )
      }
    });

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Root} />
    <Route path='categories' component={CategoryIndex} />
    <Route path='categories/:categoryId' component={CategoryShow} />
    <Route path="projects/new" component={ProjectForm} />
    <Route path="projects/:projectId/edit" component={ProjectForm} />
    <Route path="projects/:projectId" component={ProjectShow}></Route>
    <Route path="users/:userId" component={UserShow}></Route>
  </Route>
);


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
})
