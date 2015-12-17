var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    ProjectStore = require('../../stores/ProjectStore'),
    Link = require('react-router').Link,
    BackingsForm = require('../BackingsForm'),
    SessionStore = require('../../stores/SessionStore'),
    CommentsIndex = require('../comments/CommentsIndex'),
    CommentForm = require('../comments/CommentForm'),
    ProjectImage = require('./ProjectImageCarousel');

module.exports = React.createClass({
  getInitialState: function() {
    ApiUtil.fetchProject(this.props.params.projectId);
    return { project: ProjectStore.find(parseInt(this.props.params.projectId))
      };
  },

  listeners: [],

  _updateState: function() {
    this.setState({ project: ProjectStore.find(parseInt(this.props.params.projectId)) });
  },

  componentWillMount: function() {
    ApiUtil.fetchEveryProject();
  },

  componentDidMount: function() {
    this.listeners.push(ProjectStore.addListener(this._updateState));
    ApiUtil.fetchProject(this.props.params.projectId);
  },

  componentWillUnmount: function() {
    this.listeners.forEach(function(listener) {
      listener.remove();
    })
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ project: ProjectStore.find(parseInt(newProps.params.projectId)) })
  },

  undoBacking: function() {
    var backing = this._findBacking();
    ApiUtil.destroyBacking(backing.id);
  },

  imageButton: function(e) {
    e.preventDefault()

    cloudinary.openUploadWidget(window.CloudinaryOptions, function(error, result) {
      if (!error) {
        var image = {
          imageable_id: this.state.project.id,
          imageable_type: "Project",
          image_public_id: result[0].public_id
        };
        ApiUtil.addProjectImage(image);
      }
    }.bind(this))
  },


  render: function() {
    var project = this.state.project;
    var url = '/categories/' + project.category_id;
    var backingForm;

    if (SessionStore.currentUser()) {

      if (this._checkBacking()) {
        backingForm = <button onClick={this.undoBacking}>Withdraw Support</button>
      } else {
        backingForm = <BackingsForm project={project}/>
      }
    } else {
      backingForm = <button onClick={function(){location.href = '/session/new'}.bind(this)}>Back Project</button>
    }

    return(
      <div className="project-show-pane">
        <Link to={url}>Back to Projects List</Link>
        <header>
          <h3>{project.title}</h3>

          <div className="row">
            <ProjectImage className="col-xs-2" images={project.images} />

            <div className="col-xs-2">
              <h5>Project Summary:</h5>
              <div>{project.summary}</div>

              <div>
                <h5>Funding:</h5>
                {this._calcFunding()} out of {project.goal_amt}
                <br/>
                {project.backings.length} Backers
                <br/>
                {backingForm}
              </div>

              <div>
                <h5>Campaign:</h5>
                {this._calcTimeLeft()} days left!
              </div>
            </div>
          </div>

          <div className="form-group row" >
            <button className='btn btn-primary' onClick={this.imageButton}>Upload Image</button>
          </div>

        </header>

        <content className="project-body">
          <h4>Project Description:</h4>
          {project.description}

          <div>
            <h4>Comments: ({project.comments.length})</h4>
            <CommentsIndex comments={project.comments} />
            <CommentForm project={project} />
          </div>
        </content>
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
    var currentUser = SessionStore.currentUser();

    var backingFound = this._findBacking()

    return backingFound ? true : false;
  },

  _findBacking: function() {
    var project = this.state.project;
    var backings = this.state.project.backings;
    var currentUser = SessionStore.currentUser();

    return backings.find(function(backing){
      return backing.backer_id === currentUser.id
    });
  },

});
