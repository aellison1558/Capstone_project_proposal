var React = require('react'),
    Jumbotron = require('react-bootstrap').Jumbotron;

module.exports = React.createClass({

  render: function() {
    return(

      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000} transitionEnterTimeout={1000} >
        <Jumbotron className='welcome'>
          <h1>Welcome to the DeathSTARter</h1>
          <p>Funding the common good of the Empire</p>
        </Jumbotron>
      </ReactCSSTransitionGroup>
    )
  }
});
