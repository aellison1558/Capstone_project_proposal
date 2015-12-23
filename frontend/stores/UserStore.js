var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    ApiUtil = require('../util/ApiUtil'),
    UserConstants = require('../constants/UserConstants'),
    SessionConstants = require('../constants/SessionConstants');

var _users = [];

var UserStore = new Store(Dispatcher);

UserStore.all = function() {
  return _users.slice();
};

UserStore.find = function(id) {
  return _users.find(function(user) {
    return user.id === id;
  })
};

UserStore.resetUsers = function(users) {
  _users = users;
};

UserStore.updateUser = function(user) {
  var idx = _users.indexOf(user);
  _users[idx] = user;
};

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_USERS:
      UserStore.resetUsers(payload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVE_USER:
      UserStore.updateUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
