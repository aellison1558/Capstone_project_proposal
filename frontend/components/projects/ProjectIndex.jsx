var React = require('react'),
    ProjectStore = require('../../stores/ProjectStore'),
    ApiUtil = require('../../util/ApiUtil'),
    Link = require('react-router').Link,
    ProjectIndexItem = require('./ProjectIndexItem');

module.exports = React.createClass({
  getInitialState: function() {
    return {projects: ProjectStore.all()};
  },

  listeners: [],

  _updateState: function() {
    this.setState({projects: ProjectStore.all()});
  },

  componentDidMount: function() {
    this.listeners.push(ProjectStore.addListener(this._updateState));
    ApiUtil.fetchAllProjects(this.props.categoryId);
  },

  componentWillUnmount: function() {
    this.listeners.forEach(function(listener) {
      listener.remove();
    });
  },

  render: function() {
    var items = []
    var projects = this.state.projects;
    for (key in projects) {
      if (projects.hasOwnProperty(key)) {
        items.push(<ProjectIndexItem key={key} editButtonHandler={this.props.editButtonHandler} project={projects[key]}/>);
      }
    };

    return(
      <ul>
        {items}
      </ul>
    );
  }
});
