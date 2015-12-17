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
    if (this.state.currentUser) {
      var url = '/users/' + this.state.currentUser.id;

      signInSignOut = [
        <li key={5} className='navbar-right'><button className='btn btn-nav' onClick={this.logOut}>Log Out</button></li>,
        <li key={4} className='navbar-text navbar-right'>Signed in as: <Link to={url}>{this.state.currentUser.username}</Link></li>
      ]
    } else {
      signInSignOut = [
        <li key={4} className='navbar-right'><SignUpForm /></li>,
        <li key={5} className='navbar-right'><SignInForm /></li>
      ]
    }
    return(
      <nav className="nav">
        <ul className="nav nav-tabs">
          <li key={0}><Link className="navbar-brand" to='/'><img src='' alt="TheDeathSTARter"/></Link></li>
          <li key={1}><Link className="navbar-link" to='/categories'>Discover</Link></li>
          <li key={2}><Link className="navbar-link" to='/projects/new'>Start a Project</Link></li>
          <li key={3}><Search projects={this.state.projects}/></li>
          {signInSignOut}
        </ul>
      </nav>
    )

  }
});
