var React = require('react'),
    CategoryStore = require('../../stores/CategoryStore'),
    ApiUtil = require('../../util/ApiUtil'),
    Link = require('react-router').Link,
    ReactCSSTransitionGroup = require('react-addons-css-transition-group');

module.exports = React.createClass({
  getInitialState: function() {
    return { categories: CategoryStore.all() }
  },

  listeners: [],

  categories: ['superweapons', 'army', 'navy', 'technology', 'economy', 'civil', 'exploration', 'force', 'private'],

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
    var items = this.state.categories.map(function(category, idx) {
      var url = "/categories/" + category.id;
      return <Link className="category-index-item" id={this.categories[idx]} key={category.id} to={url}>{category.name}</Link>
    }.bind(this));

    return(

      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000} transitionEnterTimeout={1000} >
        <div key='category-index-pane' className="category-index-pane">
          <div className="category-index">
            <h3>Categories:</h3>
            {items}
          </div>
        </div>

      </ReactCSSTransitionGroup>
    )
  }
});
