var React = require('react'),
    Jumbotron = require('react-bootstrap').Jumbotron;

module.exports = React.createClass({

  render: function() {
    return(
      <Jumbotron className='welcome'>
        <h1>Welcome to the DeathSTARter</h1>
        <p>Funding the common good of the Empire</p>
      </Jumbotron>
    )
  }
});
