var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    ProjectStore = require('../../stores/ProjectStore'),
    Link = require('react-router').Link,
    BackingsForm = require('../BackingsForm'),
    UserStore = require('../../stores/UserStore');

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

  undoBacking: function() {
    var backing = this._findBacking();
    ApiUtil.destroyBacking(backing.id);
  },

  render: function() {
    var project = this.state.project;
    var url = '/categories/' + project.category_id;
    var backingForm;

    if (this._checkBacking()) {
      backingForm = <button onClick={this.undoBacking}>Withdraw Support</button>
    } else {
      backingForm = <BackingsForm projectId={project.id}/>
    }

    return(
      <div>
        <Link to={url}>Back to Projects List</Link>
        <h3>{project.title}</h3>
        Project Summary:
        <div>{project.summary}</div>

        <div>
          Funding:
          {this._calcFunding()} out of {project.goal_amt}
          <br/>
          {project.backings.length} Backers
          <br/>
          {backingForm}
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
  },

  _calcFunding: function() {
    var project = this.state.project;
    var backings = this.state.project.backings;
    var current_funding = 0;

    backings.forEach(function(backing) {
      current_funding += backing.amount;
    })

    return current_funding;
  },

  _checkBacking: function(){
    var project = this.state.project;
    var backings = this.state.project.backings;
    var currentUser = UserStore.user();

    var backingFound = this._findBacking()

    return backingFound ? true : false;
  },

  _findBacking: function() {
    var project = this.state.project;
    var backings = this.state.project.backings;
    var currentUser = UserStore.user();

    return backings.find(function(backing){
      return backing.backer_id === currentUser.id
    });
  }

});
