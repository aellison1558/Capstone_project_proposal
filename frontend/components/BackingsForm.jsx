var React = require('react'),
    ApiUtil = require('../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkStateMixin],

  getInitialState: function() {
    return { amount: 0 };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    ApiUtil.createBacking({
      amount: this.state.amount,
      project_id: this.props.projectId
    })
  },

  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h4>Back Project:</h4>
        <div className="form-group">
          <label>Amount:
            <input type='number' className='form-control' valueLink={this.linkState('amount')} />
          </label>
        </div>

        <input type="submit" value='Back Project'/>
      </form>
    )
  }
});
