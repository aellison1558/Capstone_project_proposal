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
      return <li key={category.id} ><Link to={url}>{category.name}</Link></li>
    });

    return(
      <div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
});
