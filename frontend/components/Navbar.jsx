var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  logOut: function(e) {

  },

  render: function() {
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
          <li><a href="/users/new">Sign Up</a></li>
          <li><a href="/session/new">Log In</a></li>
        </ul>
      </nav>
    )
  }
});
