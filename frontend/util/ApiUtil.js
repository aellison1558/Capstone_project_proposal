var ApiActions = require('../actions/ApiActions');

module.exports = {
  fetchAllProjects: function(categoryId){
    var url = '/api/categories/' + categoryId + '/projects';
    $.get(url, {}, function(projects){
      ApiActions.receiveAllProjects(projects);
    })
  },

  fetchProject: function(projectId){
    var url = '/api/projects/' + projectId;
    $.get(url, {}, function(project){
      ApiActions.receiveProject(project);
    })
  },

  createProject: function(project){
    $.post('/api/projects', {project: project}, function(project){
      ApiActions.receiveProject(project);
    })
  },

  updateProject: function(projectId, project){
    $.ajax({
      url: '/api/projects/' + projectId,
      method: "PATCH",
      data: {project: project},
      dataType: 'json',
      success: function(updatedProject){
        ApiActions.receiveProject(updatedProject);
      }
    })
  },

  destroyProject: function(projectId){
    var url = '/api/projects/' + projectId
    console.log(url);
    $.ajax({
      url: url,
      method: "DELETE",
      success: function(){
        ApiActions.destroyProject(projectId);
        location.href = '/';
      }
    })
  }
}
