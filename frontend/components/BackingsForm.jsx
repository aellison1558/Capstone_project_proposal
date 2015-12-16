var React = require('react'),
    ApiUtil = require('../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin'),
    Modal = require('react-bootstrap').Modal;

module.exports = React.createClass({
  mixins: [LinkStateMixin],

  getInitialState: function() {
    return {
      amount: 0,
      showModal: false
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

    ApiUtil.createBacking({
      amount: this.state.amount,
      project_id: this.props.project.id
    })
  },

  render: function() {
    var submitText = "Back " + this.props.project.title
    return(
      <div>

        <button bsStyle="primary" bsSize="large" onClick={this.open}>
            Back Project
        </button>
        <Modal show={this.state.showModal} onHide={this.close}>

            <Modal.Header closeButton>
              <Modal.Title>Back Project:</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Amount:
                    <input type='number' className='form-control' valueLink={this.linkState('amount')} />
                  </label>
                </div>

                <input type="submit" value={submitText}/>
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
