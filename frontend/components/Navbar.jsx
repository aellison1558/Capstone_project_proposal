var React = require('react'),
    Link = require('react-router').Link,
    UserStore = require('../stores/UserStore'),
    ApiUtil = require('../util/ApiUtil');


module.exports = React.createClass({
  getInitialState: function(){
    return { currentUser: UserStore.user() }
  },

  listeners: [],

  _updateState: function(){
    this.setState({ currentUser: UserStore.user() })
  },

  componentDidMount: function(){
    this.listeners.push(UserStore.addListener(this._updateState));
    ApiUtil.checkSignIn();
  },

  logOut: function(e) {
    ApiUtil.signOut();
  },

  render: function() {
    var signInSignOut;
    if (this.state.currentUser) {
      signInSignOut = [
        <li>Signed in as {this.state.currentUser.username}</li>,
        <li><button onClick={this.logOut}>Log Out</button></li>
      ]
    } else {
      signInSignOut = [
        <li><a href="/users/new">Sign Up</a></li>,
        <li><a href="/session/new">Log In</a></li>
      ]
    }
    return(
      <nav className="nav">
        <ul className="nav nav-tabs">
          <li><Link className="navbar-brand" to='/'>The DeathSTARter</Link></li>
          <li><Link className="navbar-link" to='/categories'>Discover</Link></li>
          <li><Link className="navbar-link" to='/projects/new'>Start a Project</Link></li>
          <li>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </form>
          </li>
          {signInSignOut}
        </ul>
      </nav>
    )

  }
});
