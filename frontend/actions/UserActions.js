var Dispatcher = require('../dispatcher/Dispatcher'),
    UserConstants = require('../constants/UserConstants');

module.exports = {
  receiveAllUsers: function(users) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USERS,
      users: users
    })
  },

  receiveUser: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USER,
      user: user
    })
  }
};
