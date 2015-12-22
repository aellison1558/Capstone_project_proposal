var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    ApiUtil = require('../util/ApiUtil'),
    ProjectConstants = require('../constants/ProjectConstants'),
    SessionConstants = require('../constants/SessionConstants');

var _projects = {};
var ProjectStore = new Store(Dispatcher);

ProjectStore.all = function() {
  var result = {};

  for (key in _projects) {
    if (_projects.hasOwnProperty(key)) {
      result[key] = _projects[key];
    }
  }

  return result;
};

ProjectStore.find = function(id) {
  return _projects[id];
};

ProjectStore.resetProjects = function(projects) {
  _projects = {};

  projects.forEach(function(project){
    _projects[project.id] = project;
  });
};

ProjectStore.updateProject = function(project) {
  _projects[project.id] = project;
};

ProjectStore.__onDispatch = function(payload) {

  switch(payload.actionType) {

    case ProjectConstants.RECEIVE_PROJECTS:
      ProjectStore.resetProjects(payload.projects);
      ProjectStore.__emitChange();
      break;

    case ProjectConstants.RECEIVE_PROJECT:
      ProjectStore.updateProject(payload.project);
      ProjectStore.__emitChange();
      break;

    case ProjectConstants.RECEIVE_EVERY_PROJECT:
      ProjectStore.resetProjects(payload.projects);
      ProjectStore.__emitChange();
      break;

  }
};

module.exports = ProjectStore;
