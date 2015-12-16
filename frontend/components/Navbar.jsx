var React = require('react'),
    Link = require('react-router').Link,
    SessionStore = require('../stores/SessionStore'),
    ApiUtil = require('../util/ApiUtil'),
    Search = require('./Search'),
    ProjectStore = require('../stores/ProjectStore');


module.exports = React.createClass({
  getInitialState: function(){
    return {
      currentUser: SessionStore.currentUser(),
      projects: ProjectStore.all()
    }
  },

  listeners: [],

  _updateState: function(){
    this.setState({
      currentUser: SessionStore.currentUser(),
      projects: ProjectStore.all()
    })
  },

  componentDidMount: function(){
    this.listeners.push(SessionStore.addListener(this._updateState));
    this.listeners.push(ProjectStore.addListener(this._updateState));
    ApiUtil.checkSignIn();
    ApiUtil.fetchEveryProject();
  },

  logOut: function(e) {
    ApiUtil.signOut();
  },

  render: function() {
    var signInSignOut;
    if (this.state.currentUser) {
      signInSignOut = [
        <li key={4}>Signed in as {this.state.currentUser.username}</li>,
        <li key={5}><button onClick={this.logOut}>Log Out</button></li>
      ]
    } else {
      signInSignOut = [
        <li key={4}><a href="/users/new">Sign Up</a></li>,
        <li key={5}><a href="/session/new">Log In</a></li>
      ]
    }
    return(
      <nav className="nav">
        <ul className="nav nav-tabs">
          <li key={0}><Link className="navbar-brand" to='/'>The DeathSTARter</Link></li>
          <li key={1}><Link className="navbar-link" to='/categories'>Discover</Link></li>
          <li key={2}><Link className="navbar-link" to='/projects/new'>Start a Project</Link></li>
          <li key={3}><Search projects={this.state.projects}/></li>
          {signInSignOut}
        </ul>
      </nav>
    )

  }
});
