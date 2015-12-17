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
      showModal: false,
    };
  },

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },

  handleSubmit: function(e) {
    e.preventDefault();

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
