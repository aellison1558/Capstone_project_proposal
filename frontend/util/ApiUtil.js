var ProjectActions = require('../actions/ProjectActions'),
    CategoryActions = require('../actions/CategoryActions'),
    SessionActions = require('../actions/SessionActions');

module.exports = {
  checkSignIn: function() {
    $.get('/session', {}, function(currentUser) {
      SessionActions.receiveUser(currentUser);
    })
  },

  signOut: function() {
    var url = '/session/'
    $.ajax({
      url: url,
      method: "DELETE",
      success: function(){
        SessionActions.clearUser();
      }
    })
  },

  fetchAllCategories: function() {
    $.get('/api/categories', {}, function(categories) {
      CategoryActions.receiveAllCategories(categories);
    })

  },

  fetchAllProjects: function(categoryId){
    var url = '/api/categories/' + categoryId + '/projects';

    $.get(url, {}, function(projects){
      ProjectActions.receiveAllProjects(projects);
    })
  },

  fetchEveryProject: function(){
    $.get('/api/projects', {}, function(projects){
      ProjectActions.receiveEveryProject(projects);
    })
  },

  fetchProject: function(projectId){
    var url = '/api/projects/' + projectId;

    $.get(url, {}, function(project){
      ProjectActions.receiveProject(project);
    })
  },

  createProject: function(project){
    $.post('/api/projects', {project: project}, function(project){
      ProjectActions.receiveProject(project);
    })
  },

  updateProject: function(projectId, project){
    var url = '/api/projects/' + projectId;

    $.ajax({
      url: url,
      method: "PATCH",
      data: {project: project},
      dataType: 'json',
      success: function(updatedProject){
        ProjectActions.receiveProject(updatedProject);
      }
    })
  },

  destroyProject: function(projectId){
    var url = '/api/projects/' + projectId;

    $.ajax({
      url: url,
      method: "DELETE",
      success: function(projects){
        ProjectActions.receiveAllProjects(projects);
      }
    })
  },

  createBacking: function(backing){
    $.post('/api/backings', {backing: backing}, function(project){
      ProjectActions.receiveProject(project);
    })
  },

  destroyBacking: function(backingId){
    var url = '/api/backings/' + backingId;
    $.ajax({
      url: url,
      method: "DELETE",
      success: function(project){
        ProjectActions.receiveProject(project);
      }
    })
  },

  createComment: function(comment){
    $.post('/api/comments', {comment: comment}, function(project){
      ProjectActions.receiveProject(project);
    })
  },

  destroyComment: function(commentId){
    var url = '/api/comments/' + commentId;
    $.ajax({
      url: url,
      method: "DELETE",
      success: function(project){
        ProjectActions.receiveProject(project);
      }
    })
  },

  addProjectImage: function(image){
    $.post('/api/images', {image: image}, function(project){
      ProjectActions.receiveProject(project);
    })
  }
}
