var React = require('react'),
    Link = require('react-router').Link,
    SessionStore = require('../stores/SessionStore'),
    ApiUtil = require('../util/ApiUtil'),
    Search = require('./Search'),
    ProjectSearchStore = require('../stores/ProjectSearchStore'),
    SignInForm = require('./SignInForm'),
    SignUpForm = require('./SignUpForm'),
    Navbar = require('react-bootstrap').Navbar,
    Nav = require('react-bootstrap').Nav,
    NavItem = require('react-bootstrap').NavItem,
    History = require('react-router').History;


module.exports = React.createClass({
  mixins: [History],

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
    // this.history.push('/');
  },

  render: function() {
    var signInSignOut;
    var startProjectUrl
    if (this.state.currentUser) {
      var url = '#/users/' + this.state.currentUser.id;
      startProjectUrl = <NavItem key={2} eventKey={2} href="#/projects/new">Start a Project</NavItem>

      signInSignOut = [
        <NavItem key={4}><button className='btn btn-nav' onClick={this.logOut}>Log Out</button></NavItem>,
        <NavItem key={5} href={url}>Signed in as: {this.state.currentUser.username}</NavItem>
      ]
    } else {
      startProjectUrl = <NavItem key={2} eventKey={2} href="#">Start a Project</NavItem>
      signInSignOut = [
        <NavItem key={4} eventKey={4}><SignInForm redirectToCategories={this.props.redirectToCategories} text="Log In" /></NavItem>
      ]
    }
    return(

      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <div key={0}><Link to='/'><div id="logo"></div></Link></div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem key={1} eventKey={1} href="#/categories">Discover</NavItem>
            {startProjectUrl}
            <NavItem key={3} eventKey={3}><Search projects={this.state.projects}/></NavItem>
          </Nav>
          <Nav pullRight>
            {signInSignOut}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

  }
});
