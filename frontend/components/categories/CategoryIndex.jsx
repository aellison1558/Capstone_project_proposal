var React = require('react'),
    CategoryStore = require('../../stores/CategoryStore'),
    ApiUtil = require('../../util/ApiUtil'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  getInitialState: function() {
    return { categories: CategoryStore.all() }
  },

  listeners: [],

  _updateState: function() {
    this.setState({ categories: CategoryStore.all() });
  },

  componentDidMount: function() {
    CategoryStore.addListener(this._updateState);
    ApiUtil.fetchAllCategories();
  },

  componentWillUnmount: function() {
    this.listeners.forEach(function(listener) {
      listener.remove();
    })
  },

  render: function() {
    var items = this.state.categories.map(function(category) {
      var url = "/categories/" + category.id;
      return <Link className="category-index-item" key={category.id} to={url}>{category.name}</Link>
    });

    return(
      <div className="category-index-pane">
        <div className="category-index">
          <h3>Categories:</h3>
          {items}
        </div>
      </div>
    )
  }
});
