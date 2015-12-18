var React = require('react'),
    ApiUtil = require('../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin'),
    Modal = require('react-bootstrap').Modal;

module.exports = React.createClass({
  mixins: [LinkStateMixin],

  getInitialState: function() {
    return {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      showModal: false,
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

    if (!this.state.username) {
      errors.push(<li>Username can't be blank</li>);
      this.setState({errors: errors});
      validated = false;
    }

    if (!this.state.password) {
      errors.push(<li>Password can't be blank</li>);
      this.setState({errors: errors});
      validated = false;
    }

    if (this.state.password !== this.state.passwordConfirmation) {
      errors.push(<li>Password didn't match confirmation</li>);
      this.setState({errors: errors});
      validated = false;
    }

    return validated
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var validated = true;
    var errors = this.state.errors.slice();

    if (!this._validations()) {return false;}
    ApiUtil.createUser({
      email: this.state.email,
      username: this.state.username,
      password: this.state.password})
  },

  render: function() {

    return(
      <div>

        <button bsStyle="primary" bsSize="large" onClick={this.open}>
            Sign Up
        </button>
        <Modal show={this.state.showModal} onHide={this.close}>

            <Modal.Header closeButton>
              <Modal.Title>Sign Up:</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <ul className="errors">
              {this.state.errors}
            </ul>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Email:
                    <input type='string' className='form-control' valueLink={this.linkState('email')} />
                  </label>
                </div>

                <div className="form-group">
                  <label>Username:
                    <input type='string' className='form-control' valueLink={this.linkState('username')} />
                  </label>
                </div>

                <div className="form-group">
                  <label>Password:
                    <input type='password' className='form-control' valueLink={this.linkState('password')} />
                  </label>
                </div>

                <div className="form-group">
                  <label>Password-Confirmation:
                    <input type='password' className='form-control' valueLink={this.linkState('passwordConfirmation')} />
                  </label>
                </div>

                <input type="submit" value='Sign Up'/>
            </form>
            </Modal.Body>

            <Modal.Footer>
            <button onClick={this.close}>Close</button>
            </Modal.Footer>


        </Modal>
      </div>
    )
  }
});
