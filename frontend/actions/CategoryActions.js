var CategoryConstants = require('../constants/CategoryConstants'),
    Dispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  receiveAllCategories: function(categories) {
    Dispatcher.dispatch({
      actionType: CategoryConstants.RECEIVE_CATEGORIES,
      categories: categories
    })
  }

};
