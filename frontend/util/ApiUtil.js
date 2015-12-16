var ProjectActions = require('../actions/ProjectActions'),
    CategoryActions = require('../actions/CategoryActions');

module.exports = {
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
  }
}
