var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return(
      <ul className="nav nav-tabs">
        <li><Link to='/'>The DeathSTARter</Link></li>
        <li><Link to='/categories'>Discover</Link></li>
        <li><Link to='/projects/new'>Create Project</Link></li>
      </ul>
    )
  }
});
