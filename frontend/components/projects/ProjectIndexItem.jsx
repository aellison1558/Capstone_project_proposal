var React = require('react'),
    ProjectStore = require('../../stores/ProjectStore'),
    ApiUtil = require('../../util/ApiUtil'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  editProjectButton: function() {
    this.props.editButtonHandler(this.props.project.id);
  },

  destroyProjectButton: function() {
    ApiUtil.destroyProject(this.props.project.id);
  },

  render: function(){
    var project = this.props.project;
    var url = '/projects/' + project.id
    
    return(
      <li>
        <h3><Link to={url}>{project.title}</Link></h3>
        <div>{project.summary}</div>
        <button onClick={this.editProjectButton}>Edit Project</button>
        <button onClick={this.destroyProjectButton}>Destroy Project</button>
      </li>
    );
  }
});
