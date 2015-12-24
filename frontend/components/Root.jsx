var React = require('react'),
    Jumbotron = require('react-bootstrap').Jumbotron,
    Logo = require('./Logo');

module.exports = React.createClass({
  componentWillMount: function() {
    if (this.props.location && this.props.location.action === 'POP') {
      $.get('/', {}, function() {});
    }
  },

  render: function() {
    var disclaimer = "Note: all projects are subject to review by the Imperial Security Bureau";
    return(

      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000}  transitionEnterTimeout={1000} transitionLeaveTimeout={1000} >
        <Jumbotron className='welcome'>
          <h1>Welcome to the DeathSTARter</h1>
          <p>Funding the common good of the Empire</p>
          <p>Click discover to checkout projects or log in to propose your own</p>
          <h6>{disclaimer}</h6>
        </Jumbotron>
      </ReactCSSTransitionGroup>
    )
  }
});
