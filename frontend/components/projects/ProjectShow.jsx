var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    ProjectStore = require('../../stores/ProjectStore'),
    Link = require('react-router').Link,
    BackingsForm = require('../backings/BackingsForm'),
    SessionStore = require('../../stores/SessionStore'),
    CommentsIndex = require('../comments/CommentsIndex'),
    CommentForm = require('../comments/CommentForm'),
    ProjectImage = require('./ProjectImageCarousel'),
    SignInForm = require('../SignInForm'),
    UserStore = require('../../stores/UserStore'),
    Funding = require('./Funding'),
    Backings = require('../backings/Backings');

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

  componentWillReceiveProps: function(newProps) {
    if (newProps.location.action === 'POP') {
      this.props.history.push('/');
    }
  },

  componentDidMount: function() {
    this.listeners.push(ProjectStore.addListener(this._updateState));
    this.listeners.push(SessionStore.addListener(this._updateState));
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



  imageButton: function(e) {
    e.preventDefault();

    var options = {};

    for (key in window.CloudinaryOptions) {
      if (window.CloudinaryOptions.hasOwnProperty(key)) {
        options[key] = window.CloudinaryOptions[key]
      }
    };

    options['multiple'] = false;

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
    if (this.state.project) {
      url = '/categories/' + project.category_id;
    } else {
      url = '/';
    }

    var user = this.state.users.find(function(user) {return user.id === project.creator_id}) || {username: ""}
    var userUrl = user.id ? '/users/' + user.id : "";

    if (SessionStore.currentUser() && user.id) {
      var commentForm = <CommentForm project={project} />
    } else {
      commentForm = <div><SignInForm text="Log in to comment"/></div>
    }

    var timeLeft = "";
    var live = ""
    if (user.id) {
      var live = this._checkLive()
    }
    if (user.id && live === 'LIVE') {
      timeLeft = <div>{this._calcTimeLeft()} days left!</div>;
    };

    var uploadImage = "";

    if (SessionStore.currentUser() && user.id === SessionStore.currentUser().id) {
      uploadImage = <button className='btn btn-primary' onClick={this.imageButton}>Upload Image</button>;
    }

    return(
      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000}  transitionEnterTimeout={1000} transitionLeaveTimeout={1000} >
        <div className="project-show-pane">
          <Link to={url}>Back to Projects List</Link>
          <header>
            <h3>{project.title}</h3>
            By: <Link to={userUrl}>{user.username}</Link>

            <div className="row">
              <div className="col-xs-6">
                <ProjectImage  images={project.images} />
                {uploadImage}
              </div>

              <div className="col-xs-6">
                <div className="row">
                  <div className="col-xs-4">
                    <h5>Project Summary:</h5>
                    <div>{project.summary}</div>
                  </div>
                  <div className="col-xs-4">
                    <Backings project={project} user={user}/>
                  </div>

                  <div className="col-xs-4">
                    <h5>Campaign:</h5>
                    <h6>{live}</h6>
                    {timeLeft}
                  </div>


                </div>
              </div>
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



  _checkLive: function() {
    var project = this.state.project;
    var today = new Date();
    var start = project.start_date;
    var end = project.end_date;

    if (Date.parse(today) - Date.parse(start) < 0) {
      return ("Campaign hasn't started yet");
    } else if (Date.parse(today) - Date.parse(end) < 0) {
      return ("LIVE");
    } else {
      return ("Campaign over!");
    }
  }

});
