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
    NavItem = require('react-bootstrap').NavItem;


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

  guestSignIn: function() {
    ApiUtil.signIn('tk-421@stc.mil', 'feelingalittleshort');
  },


  render: function() {
    var signInSignOut;
    var startProjectUrl
    if (this.state.currentUser) {
      var url = '#/users/' + this.state.currentUser.id;
      startProjectUrl = <NavItem eventKey={2} href="#/projects/new">Start a Project</NavItem>

      signInSignOut = [
        <NavItem key={2}><button className='btn btn-nav' onClick={this.logOut}>Log Out</button></NavItem>,
        <NavItem key={3} href={url}>Signed in as: {this.state.currentUser.username}</NavItem>
      ]
    } else {
      startProjectUrl = <NavItem eventKey={2}><SignInForm text="Log in to Create Project"/></NavItem>
      signInSignOut = [
        <NavItem eventKey={2}><SignUpForm /></NavItem>,
        <NavItem eventKey={3}><SignInForm text="Log In" /></NavItem>,
        <NavItem eventKey={4}><button onClick={this.guestSignIn}>Guest Log In</button></NavItem>
      ]
    }
    return(

      <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <div key={0}><Link to='/'><img src={window.logo} /></Link></div>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#/categories">Discover</NavItem>
        {startProjectUrl}
        <NavItem eventKey={3}><Search projects={this.state.projects}/></NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1}>
              <audio id="swmusic" controls>
                <source  src="http://res.cloudinary.com/dhcnfmydo/video/upload/v1450469890/Star_Wars_-_Imperial_march_xoyf3w.mp3">
                </source>
              </audio>
        </NavItem>
        {signInSignOut}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )

  }
});
