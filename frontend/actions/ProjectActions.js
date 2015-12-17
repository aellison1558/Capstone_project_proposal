var Dispatcher = require('../dispatcher/Dispatcher'),
    ProjectConstants = require('../constants/ProjectConstants');

module.exports = {
  receiveAllProjects: function(projects) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.RECEIVE_PROJECTS,
      projects: projects
    })
  },

  receiveProject: function(project) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.RECEIVE_PROJECT,
      project: project
    })
  },

  receiveEveryProject: function(projects) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.RECEIVE_EVERY_PROJECT,
      projects: projects
    })
  }

};
