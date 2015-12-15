var React = require('react'),
    ProjectIndex = require('../projects/ProjectIndex'),
    CategoryStore = require('../../stores/CategoryStore');

module.exports = React.createClass({
  render: function() {
    return(
      <div>
        <ProjectIndex categoryId={this.props.params.categoryId} />
      </div>
    )
  }
});
