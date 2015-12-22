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
          this.setState({contentClass: 'content group light'});
        } else {
          this.setState({contentClass: 'content group'});
        }
      },

      render: function(){

        return(
          <div>
            <ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={1000}>
              <header id='header'><Navbar /></header>
            </ReactCSSTransitionGroup>

            <div key='content' className={this.state.contentClass}>
              {this.props.children}
            </div>

            <ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={1000}>
              <footer id="footer" className="bottom group">

                    <audio id="swmusic" controls>
                      <source  src="https://res.cloudinary.com/dhcnfmydo/video/upload/v1450469890/Star_Wars_Episode_V_Soundtrack_-_The_Imperial_March_Darth_Vader_s_Theme_v4ilco.mp3">
                      </source>
                    </audio>
              
              </footer>
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
