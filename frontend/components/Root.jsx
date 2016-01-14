var React = require('react'),
    Jumbotron = require('react-bootstrap').Jumbotron,
    Logo = require('./Logo'),
    SignInForm = require('./SignInForm'),
    SessionStore = require('../stores/SessionStore');

module.exports = React.createClass({
  getInitialState: function() {
    return({
      currentUser: SessionStore.currentUser()
    })
  },

  componentWillMount: function() {
    if (this.props.location && this.props.location.action === 'POP') {
      $.get('/', {}, function() {});
    }
  },

  discover: function() {
    this.props.history.push('/categories');
  },

  redirectToCategories: function() {
    this.props.history.push('/categories/');
  },

  render: function() {
    var disclaimer = "Note: all projects are subject to review by the Imperial Security Bureau";
    var signin = !this.state.currentUser ? <div><SignInForm redirectToCategories={this.redirectToCategories} text="Log In"/></div> : "";
    return(

      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000}  transitionEnterTimeout={1000} transitionLeaveTimeout={1000} >
        <Jumbotron className='welcome'>
          <h1>Welcome to the DeathSTARter</h1>
          <p>Funding the common good of the Empire</p>
          <h6>{disclaimer}</h6>
        </Jumbotron>
      </ReactCSSTransitionGroup>
    )
  }
});
