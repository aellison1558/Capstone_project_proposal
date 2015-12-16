var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    ProjectStore = require('../../stores/ProjectStore'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  getInitialState: function() {
    return { project: ProjectStore.find(parseInt(this.props.params.projectId)) };
  },

  listeners: [],

  _updateState: function() {
    this.setState({ project: ProjectStore.find(parseInt(this.props.params.projectId)) });
  },

  componentDidMount: function() {
    this.listeners.push(ProjectStore.addListener(this._updateState));
    ApiUtil.fetchProject(this.state.project.id)
  },

  componentWillUnmount: function() {
    this.listeners.forEach(function(listener) {
      listener.remove();
    })
  },

  render: function() {
    var project = this.state.project;
    var url = '/categories/' + project.category_id;

    return(
      <div>
        <Link to={url}>Back to Projects List</Link>
        <h3>{project.title}</h3>
        Project Summary:
        <div>{project.summary}</div>

        <div>
          Funding:
          {project.current_amt} out of {project.goal_amt}
        </div>

        <div>
          Campaign:
          {this._calcTimeLeft()} days left!
        </div>

        <p>
          Project Description:
          {project.description}
        </p>
      </div>
    )
  },

  _calcTimeLeft: function() {
    var project = this.state.project;
    var start = new Date(project.start_date);
    var end = new Date(project.end_date);
    var elapsed = Date.parse(end) - Date.parse(start)
    elapsed = elapsed / 1000 / 60 / 60 / 24;
    return (elapsed)
  }
});
