var Dispatcher = require('../dispatcher/Dispatcher'),
    SessionConstants = require('../constants/SessionConstants');


module.exports = {

  receiveUser: function(user) {
    Dispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_USER,
      user: user
    })
  },

  clearUser: function() {
    Dispatcher.dispatch({
      actionType: SessionConstants.CLEAR_USER
    })
  }
};
