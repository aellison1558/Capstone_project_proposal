var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    SessionStore = require('../../stores/SessionStore'),
    UserStore = require('../../stores/UserStore');

module.exports = React.createClass({
  getInitialState: function() {
    return {user: UserStore.find(this.props.comment.author_id)}
  },

  _updateState: function() {
      this.setState({user: UserStore.find(this.props.comment.author_id)});
  },

  componentDidMount: function() {
    UserStore.addListener(this._updateState);
    ApiUtil.fetchAllUsers();
  },

  deleteComment: function() {
    ApiUtil.destroyComment(this.props.comment.id);
  },

  render: function() {
    var user = this.state.user || {username: ""};
    var createdAt = new Date(this.props.comment.created_at);
    var time = createdAt.toTimeString() + " on " + createdAt.toDateString();
    var deleteButton = ""
    if (SessionStore.currentUser() && SessionStore.currentUser().id === user.id) {
      deleteButton = <button onClick={this.deleteComment} >Delete Comment</button>
    }

    return(
      <li>
        {this.props.comment.body}
        <br/>
        Comment by {user.username} at {time}
        {deleteButton}
      </li>
    )
  }
});
