var React = require('react'),
    Link = require('react-router').Link,
    SessionStore = require('../stores/SessionStore'),
    ApiUtil = require('../util/ApiUtil'),
    Search = require('./Search'),
    ProjectSearchStore = require('../stores/ProjectSearchStore'),
    SignInForm = require('./SignInForm'),
    SignUpForm = require('./SignUpForm');


module.exports = React.createClass({
  getInitialState: function(){
    return {
      currentUser: SessionStore.currentUser(),
      projects: ProjectSearchStore.all()
    }
  },

  listeners: [],

  _updateState: function(){
    this.setState({
      currentUser: SessionStore.currentUser(),
      projects: ProjectSearchStore.all()
    })
  },

  componentDidMount: function(){
    this.listeners.push(SessionStore.addListener(this._updateState));
    this.listeners.push(ProjectSearchStore.addListener(this._updateState));
    ApiUtil.checkSignIn();
    ApiUtil.fetchEveryProject();
  },

  componentWillUnmount: function(){
    listeners.forEach(function(listener) {
      listener.remove();
    })
  },

  logOut: function(e) {
    ApiUtil.signOut();
  },


  render: function() {
    var signInSignOut;
    var startProjectUrl
    if (this.state.currentUser) {
      var url = '/users/' + this.state.currentUser.id;
      startProjectUrl = <Link className="navbar-link" to='projects/new'>Start a Project</Link>

      signInSignOut = [
        <li key={6} className='navbar-right'><button className='btn btn-nav' onClick={this.logOut}>Log Out</button></li>,
        <li key={5} className='navbar-text navbar-right'>Signed in as: <Link id='user-show' to={url}>{this.state.currentUser.username}</Link></li>
      ]
    } else {
      startProjectUrl = <div className='navbar-link'><SignInForm text="Log in to Create Project"/></div>
      signInSignOut = [
        <li key={5} className='navbar-right'><SignUpForm /></li>,
        <li key={6} className='navbar-right'><SignInForm text="Log In" /></li>
      ]
    }
    return(
      <nav className="nav group">
      <div key={0}><Link className="navbar-brand" to='/'><img src={window.logo} /></Link></div>
        <ul className="nav nav-tabs">
          <li key={1}><Link className="navbar-link" to='/categories'>Discover</Link></li>
          <li key={2}>{startProjectUrl}</li>
          <li key={3}><Search projects={this.state.projects}/></li>
          <li key={4}>
            <a href="#" className="audio">
              <audio id="swmusic" controls>
                <source  src="http://res.cloudinary.com/dhcnfmydo/video/upload/v1450469890/Star_Wars_-_Imperial_march_xoyf3w.mp3">
                </source>
              </audio>
            </a>
          </li>
          {signInSignOut}
        </ul>
      </nav>
    )

  }
});
