

module.exports = {
  fetchAllProjects: function(categoryId){
    var url = '/api/categories/' + categoryId + '/projects';
    $.get(url, {}, function(projects){
      // ApiActions.receiveAllProjects(projects);
      console.log(projects);
    })
  },

  fetchProject: function(projectId){
    var url = '/api/projects/' + projectId;
    $.get(url, {}, function(project){
      // ApiActions.receiveProject(project);
      console.log(project);
    })
  },

  createProject: function(project){
    $.post('/api/projects', {project: project}, function(project){
      console.log(project);
    })
  },

  updateProject: function(projectId, project){
    $.ajax({
      url: '/api/projects/' + projectId,
      method: "PATCH",
      data: {project: project},
      dataType: 'json',
      success: function(updatedProject){
        console.log(updatedProject);
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
        location.href = '/'
        console.log("Great shot kid, that was one in a million!");
      }
    })
  }
}
