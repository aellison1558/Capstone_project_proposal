var React = require('react'),
    CategoryStore = require('../../stores/CategoryStore'),
    ApiUtil = require('../../util/ApiUtil'),
    Link = require('react-router').Link,
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    CategoryIndexItem = require('./CategoryIndexItem'),
    SessionStore = require('../../stores/SessionStore');

CategoryIndex = React.createClass({
  getInitialState: function() {
    return { categories: CategoryStore.all() }
  },

  listeners: [],

  categories: ['superweapons', 'army', 'navy', 'technology', 'culture', 'civil', 'exploration', 'force', 'private'],

  _updateState: function() {
    this.setState({ categories: CategoryStore.all()});
  },

  componentDidMount: function() {
    this.listeners.push(CategoryStore.addListener(this._updateState));
    this.listeners.push(SessionStore.addListener(this._ensureSignIn));
    ApiUtil.fetchAllCategories();

  },

  _ensureSignIn: function() {
    if (SessionStore.currentUser()) {
      // ApiUtil.ensureSignIn(SessionStore.currentUser().id)
    }
  },

  componentWillUnmount: function() {
    this.listeners.forEach(function(listener) {
      listener.remove();
    })
  },


  render: function() {
    var items = this.state.categories.map(function(category, idx) {
      return (<CategoryIndexItem className="category-index-item" key={idx} catId={this.categories[idx]} category={category} />)
    }.bind(this));

    return(

      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000}  transitionEnterTimeout={1000} transitionLeaveTimeout={1000} >
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


module.exports = CategoryIndex;
