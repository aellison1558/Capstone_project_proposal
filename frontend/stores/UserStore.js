var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    UserConstants = require('../constants/UserConstants');

var UserStore = new Store(Dispatcher);
var _user = {};

UserStore.user = function() {
  var result = {};
  for (key in _user) {
    if (_user.hasOwnProperty(key)) {
      result[key] = _user[key];
    }
  }
  return _user.username ? result : null;
};

UserStore.updateUser = function(user) {
  _user = user;
};

UserStore.clearUser = function() {
  _user = {};
};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case UserConstants.RECEIVE_USER:
      UserStore.updateUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.CLEAR_USER:
      UserStore.clearUser();
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
