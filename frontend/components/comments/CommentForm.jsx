var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkStateMixin],

  getInitialState: function() {
    return { body: "" };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    ApiUtil.createComment({
      body: this.state.body,
      project_id: this.props.project.id
    })
  },

  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h4>Add Comment:</h4>
        <div className="form-group">
          <label>Body:
            <textarea className='form-control' valueLink={this.linkState('body')} />
          </label>
        </div>

        <input className='submit' type="submit" value="Add Comment"/>
      </form>
    )
  }
});
