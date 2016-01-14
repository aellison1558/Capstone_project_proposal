var React = require('react'),
    ApiUtil = require('../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin'),
    Modal = require('react-bootstrap').Modal,
    History = require('react-router').History,
    SignUpForm = require('./SignUpForm');

module.exports = React.createClass({
  mixins: [LinkStateMixin, History],

  getInitialState: function() {
    return {
      email: "",
      password: "",
      showModal: false,
      errors: []
    };
  },

  close: function() {
    this.setState({ showModal: false, errors: [] });
  },

  open: function() {
    this.setState({ showModal: true });
  },

  _validations: function() {
    var validated = true;
    var errors = [];
    var emailPattern = /.*@.*/;

    if (!this.state.email.match(emailPattern)) {
      errors.push(<li>Invalid email</li>);
      this.setState({errors: errors});
      validated = false;
    }

    if (!this.state.password) {
      errors.push(<li>Password can't be blank</li>);
      this.setState({errors: errors});
      validated = false;
    }

    return validated
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (!this._validations()) {
      return false;
    }
    ApiUtil.signIn(this.state.email, this.state.password);
    this.history.push('/categories');
  },

  guestSignIn: function() {
    this.close();
    ApiUtil.signIn('tk-421@stc.mil', 'feelingalittleshort');
    this.history.push('/categories');

  },


  render: function() {

    return(
      <div>

        <div className="login" onClick={this.open}>
            {this.props.text}
        </div>
        <Modal show={this.state.showModal} onHide={this.close}>

            <Modal.Header closeButton>
              <Modal.Title>Log In:</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <ul className='errors'>{this.state.errors}</ul>

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Email:
                    <input type='string' className='form-control' valueLink={this.linkState('email')} />
                  </label>
                </div>

                <div className="form-group">
                  <label>Password:
                    <input type='password' className='form-control' valueLink={this.linkState('password')} />
                  </label>
                </div>

                <input type="submit" value='Log In'/>
            </form>
            <p>
            <br/>
            No account?
            <SignUpForm/>
            <br/>
            </p>
            <p>
            Or use our
            <br/>
            <button onClick={this.guestSignIn}>Guest Log In</button>
            </p>

            </Modal.Body>

            <Modal.Footer>
            <button onClick={this.close}>Close</button>
            </Modal.Footer>


        </Modal>
      </div>
    )
  }
});
