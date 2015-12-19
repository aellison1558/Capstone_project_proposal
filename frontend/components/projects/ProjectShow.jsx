var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    ProjectStore = require('../../stores/ProjectStore'),
    Link = require('react-router').Link,
    BackingsForm = require('../BackingsForm'),
    SessionStore = require('../../stores/SessionStore'),
    CommentsIndex = require('../comments/CommentsIndex'),
    CommentForm = require('../comments/CommentForm'),
    ProjectImage = require('./ProjectImageCarousel'),
    SignInForm = require('../SignInForm'),
    UserStore = require('../../stores/UserStore'),
    Funding = require('./Funding');

module.exports = React.createClass({
  getInitialState: function() {
    ApiUtil.fetchProject(this.props.params.projectId);
    return { project: ProjectStore.find(parseInt(this.props.params.projectId)),
      users: UserStore.all()
      };
  },

  listeners: [],

  _updateState: function() {
    this.setState({ project: ProjectStore.find(parseInt(this.props.params.projectId)), users: UserStore.all() });
  },

  componentWillMount: function() {
    ApiUtil.fetchEveryProject();
    ApiUtil.fetchAllUsers();
  },

  componentDidMount: function() {
    this.listeners.push(ProjectStore.addListener(this._updateState));
    ApiUtil.fetchProject(this.props.params.projectId);
    ApiUtil.fetchAllUsers();
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
    e.preventDefault();

    var options = {};

    for (key in window.CloudinaryOptions) {
      if (window.CloudinaryOptions.hasOwnProperty(key)) {
        options[key] = window.CloudinaryOptions[key]
      }
    };

    options['multiple'] = false;
    options['cropping'] = 'server';
    options['cropping_aspect_ratio'] = 0.75;

    cloudinary.openUploadWidget(options, function(error, result) {
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
    var project = this.state.project || {
      title: "",
      summary: "",
      description: "",
      creator_id: 0,
      category_id: 0,
      images: [],
      backings: [],
      comments: [],
      start_date: new Date(),
      end_date: new Date()
    };
    var url;
    if (project) {
      url = '/categories/' + project.category_id;
    } else {
      url = '/';
    }
    var backingForm;
    var user = this.state.users.find(function(user) {return user.id === project.creator_id}) || {username: ""}

    if (SessionStore.currentUser()) {
      var commentForm = <CommentForm project={project} />
      if (this._checkBacking()) {
        backingForm = <button onClick={this.undoBacking}>Withdraw Support</button>
      } else {
        backingForm = <BackingsForm project={project}/>
      }
    } else {
      backingForm = <div><SignInForm text="Log in to back"/></div>
      commentForm = <div><SignInForm text="Log in to comment"/></div>
    }

    return(
      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000} transitionEnterTimeout={1000} >
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
                  <Funding />
                  {backingForm}
                </div>

                <div>
                  <h5>Campaign:</h5>
                  {this._calcTimeLeft()} days left!
                </div>

                <div>
                  By: {user.username}
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

            <div className='project-comments'>
              <h4>Comments: ({project.comments.length})</h4>
              <CommentsIndex comments={project.comments} />
              {commentForm}
            </div>
          </content>
        </div>
      </ReactCSSTransitionGroup>
    )
  },

  _calcTimeLeft: function() {
    var project = this.state.project || {
      title: "",
      summary: "",
      description: "",
      creator_id: 0,
      category_id: 0,
      images: [],
      backings: [],
      comments: [],
      start_date: new Date(),
      end_date: new Date()
    };
    var start = new Date(project.start_date);
    var end = new Date(project.end_date);
    var elapsed = Date.parse(end) - Date.parse(start)
    elapsed = elapsed / 1000 / 60 / 60 / 24;
    return (elapsed)
  },

  _calcFunding: function() {
    var project = this.state.project || {
      title: "",
      summary: "",
      description: "",
      creator_id: 0,
      category_id: 0,
      images: [],
      backings: [],
      comments: [],
      start_date: new Date(),
      end_date: new Date()
    };
    var backings = project.backings;
    var current_funding = 0;

    backings.forEach(function(backing) {
      current_funding += backing.amount;
    })

    return current_funding;
  },

  _checkBacking: function(){
    var project = this.state.project || {
      title: "",
      summary: "",
      description: "",
      creator_id: 0,
      category_id: 0,
      images: [],
      backings: [],
      comments: [],
      start_date: new Date(),
      end_date: new Date()
    };
    var backings = project.backings;
    var currentUser = SessionStore.currentUser();

    var backingFound = this._findBacking()

    return backingFound ? true : false;
  },

  _findBacking: function() {
    var project = this.state.project;
    var backings = project.backings;
    var currentUser = SessionStore.currentUser();

    return backings.find(function(backing){
      return backing.backer_id === currentUser.id
    });
  },

});
