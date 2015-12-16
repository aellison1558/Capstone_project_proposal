var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    SessionConstants = require('../constants/SessionConstants');

var SessionStore = new Store(Dispatcher);

var _currentUser = {};

SessionStore.currentUser = function() {
  var result = {};
  for (key in _currentUser) {
    if (_currentUser.hasOwnProperty(key)) {
      result[key] = _currentUser[key];
    }
  }
  return _currentUser.username ? result : null;
};

SessionStore.updateCurrentUser = function(user) {
  _currentUser = user;
};

SessionStore.clearCurrentUser = function() {
  _currentUser = {};
};

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {

    case SessionConstants.RECEIVE_USER:
      SessionStore.updateCurrentUser(payload.user);
      SessionStore.__emitChange();
      break;
    case SessionConstants.CLEAR_USER:
      SessionStore.clearCurrentUser();
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
