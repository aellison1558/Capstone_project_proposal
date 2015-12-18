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
    UserShow = require('./components/users/UserShow'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group');


    var App = React.createClass({
      getInitialState: function(){
        return {contentClass: 'content group', arrowClass: ""}
      },

      componentDidMount: function(){
        this.intervals = [];
        this.intervals.push(setInterval(this.toggleClass, 1000));
      },

      componentWillUnmount: function(){
        this.intervals.forEach(clearInterval);
      },

      toggleClass: function(){
        if (this.state.contentClass === 'content group') {
          this.setState({contentClass: 'content group light', arrowClass: "arrow-light"});
        } else {
          this.setState({contentClass: 'content group', arrowClass: ''});
        }
      },

      render: function(){
        var arrowClass = 'arrow-down ' + this.state.arrowClass
        var content = (
          <div key='content' className={this.state.contentClass}>
            {this.props.children}
          </div>
        )
        return(
          <div>
            <header><h3><Navbar /></h3></header>
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
              {content}
            </ReactCSSTransitionGroup>

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
