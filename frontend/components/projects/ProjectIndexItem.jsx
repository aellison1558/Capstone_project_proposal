var React = require('react'),
    ProjectStore = require('../../stores/ProjectStore'),
    ApiUtil = require('../../util/ApiUtil'),
    SessionStore = require('../../stores/SessionStore'),
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
    var images = project.images;
    var buttons = "";
    var image = images[0] ? <img src={"http://res.cloudinary.com/dhcnfmydo/image/upload/w_300,h_400/" + images[0].image_public_id} />: <div></div>;

    if (SessionStore.currentUser()) {
      if (SessionStore.currentUser().id === project.creator_id) {
        buttons = [
          <button onClick={this.editProjectButton}>Edit Project</button>,
          <button onClick={this.destroyProjectButton}>Destroy Project</button>
        ]
      }
    }

    return(
      <li className='project-index-item'>
        <Link to={url}>{image}<h3>{project.title}</h3></Link>
        <div>{project.summary}</div>
        {buttons}
      </li>
    );
  }
});
