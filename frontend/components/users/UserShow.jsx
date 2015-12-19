var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    ApiUtil = require('../../util/ApiUtil');

module.exports = React.createClass({
  getInitialState: function() {
    return {user: UserStore.find(parseInt(this.props.params.userId))}
  },

  listeners: [],

  _updateState: function() {
    this.setState({user: UserStore.find(parseInt(this.props.params.userId))})
  },

  componentWillMount: function() {
    ApiUtil.fetchAllUsers();
  },

  componentDidMount: function() {
    this.listeners.push(UserStore.addListener(this._updateState));
    ApiUtil.fetchAllUsers();
  },

  componentWillUnmount: function() {
    this.listeners.forEach(function(listener) {
      listener.remove();
    });
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({user: UserStore.find(parseInt(newProps.params.userId))});
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
    options['cropping_aspect_ratio'] = 1;

    cloudinary.openUploadWidget(options, function(error, result) {
      if (!error) {
        var image = {
          imageable_id: this.state.user.id,
          imageable_type: "User",
          image_public_id: result[0].public_id
        };
        if (this.state.user.profile_picture) {
          ApiUtil.changeProfilePicture(this.state.user.profile_picture.id, image);
        } else {
          ApiUtil.uploadProfilePicture(image);
        }
      }
    }.bind(this))
  },

  render: function() {
    var user = this.state.user
    var url;
    if (user) {

      if (user.profile_picture) {
        url = "http://res.cloudinary.com/dhcnfmydo/image/upload/w_200,h_200/" + user.profile_picture.image_public_id;
      }
      var username = user.username;
      console.log(user);
      console.log(user.projects);
      var numProjects = user.projects.length;
      var numBackings = user.backings.length;
      var numComments = user.comments.length;
    }

    return(
      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000} transitionEnterTimeout={1000} >
        <div className="user-profile-pane">
          <h3>{username}</h3>
          <img src={url} alt="Profile picture" />
          <button className='btn btn-primary' onClick={this.imageButton}>Change Profile Picture</button>

          <h4>{numProjects}</h4>
           Created Projects
          <h4>{numBackings}</h4>
           Backed Projects
          <h4>{numComments}</h4>
           Comments
        </div>
      </ReactCSSTransitionGroup>
    )
  }
});
