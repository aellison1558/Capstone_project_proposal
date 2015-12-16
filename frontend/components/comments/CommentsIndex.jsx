var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    CommentsIndexItem = require('./CommentsIndexItem');

module.exports = React.createClass({
  render: function() {
    var items = this.props.comments.map(function(comment) {
      return <CommentsIndexItem key={comment.id} comment={comment}/>
    });
    return(
      <ul>
        {items}
      </ul>
    )
  }
});
