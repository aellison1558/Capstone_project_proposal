var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    ApiUtil = require('../util/ApiUtil'),
    CategoryConstants = require('../constants/CategoryConstants');

var _categories = [];
var CategoryStore = new Store(Dispatcher);

CategoryStore.all = function() {
  return _categories.slice();
};

CategoryStore.resetCategories = function(categories) {
  _categories = categories;
};

CategoryStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case CategoryConstants.RECEIVE_CATEGORIES:
      CategoryStore.resetCategories(payload.categories);
      CategoryStore.__emitChange();
      break;
  }
};

module.exports = CategoryStore;
