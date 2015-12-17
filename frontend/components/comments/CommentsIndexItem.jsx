var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    SessionStore = require('../../stores/SessionStore');

module.exports = React.createClass({

  deleteComment: function() {
    ApiUtil.destroyComment(this.props.comment.id);
  },

  render: function() {
    var createdAt = new Date(this.props.comment.created_at);
    var time = createdAt.toTimeString() + " on " + createdAt.toDateString();
    
    return(
      <li>
        {this.props.comment.body}
        <br/>
        Comment by  at {time}
        <button onClick={this.deleteComment} >Delete Comment</button>
      </li>
    )
  }
});
