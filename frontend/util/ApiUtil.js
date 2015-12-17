var ProjectActions = require('../actions/ProjectActions'),
    CategoryActions = require('../actions/CategoryActions'),
    SessionActions = require('../actions/SessionActions'),
    UserActions = require('../actions/UserActions');

module.exports = {
  checkSignIn: function() {
    $.get('/session', {}, function(currentUser) {
      SessionActions.receiveUser(currentUser);
    })
  },

  signIn: function(email, password) {
    $.post('/session/', {email: email, password: password}, function(currentUser){
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

  fetchAllUsers: function() {
    $.get('/users', {}, function(users) {
      UserActions.receiveAllUsers(users);
    })
  },

  fetchUser: function(id) {
    var url = '/users/' + id;
    $.get(url, {}, function(user) {
      UserActions.receiveUser(user);
    })
  },

  createUser: function(user) {
    $.post('/users', {user: user}, function(user){
      UserActions.receiveUser(user);
    })
  },

  updateUser: function(id) {
    var url = '/users/' + id;

    $.ajax({
      url: url,
      method: "PATCH",
      data: {user: user},
      dataType: 'json',
      success: function(updatedUser){
        UserActions.receiveUser(updatedUser);
      }
    })
  },

  destroyUser: function(id) {
    var url = '/users/' + id;
    $.ajax({
      url: url,
      method: "DELETE",
      success: function(users){
        UserActions.receiveAllUsers(users);
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
  },

  uploadProfilePicture: function(image) {
    $.post('/api/images', {image: image}, function(user){
      UserActions.receiveUser(user);
    })
  },

  changeProfilePicture: function(imageId, image){
    var url = '/api/images/' + imageId;
    $.ajax({
      url: url,
      method: "DELETE",
      success: function(){
        $.post('/api/images', {image: image}, function(user){
          UserActions.receiveUser(user);
        })
      }
    })
  }
}
