var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    ApiUtil = require('../util/ApiUtil'),
    ProjectConstants = require('../constants/ProjectConstants');

var _projects = {};
var ProjectSearchStore = new Store(Dispatcher);

ProjectSearchStore.all = function() {
  var result = {};

  for (key in _projects) {
    if (_projects.hasOwnProperty(key)) {
      result[key] = _projects[key];
    }
  }

  return result;
};


ProjectSearchStore.resetProjects = function(projects) {
  _projects = {};

  projects.forEach(function(project){
    _projects[project.id] = project;
  });
};



ProjectSearchStore.__onDispatch = function(payload) {

  switch(payload.actionType) {

    case ProjectConstants.RECEIVE_EVERY_PROJECT:
      ProjectSearchStore.resetProjects(payload.projects);
      ProjectSearchStore.__emitChange();
      break;
  }
};

module.exports = ProjectSearchStore;
