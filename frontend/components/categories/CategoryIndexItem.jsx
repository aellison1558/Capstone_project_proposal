var React = require('react'),
    CategoryStore = require('../../stores/CategoryStore'),
    ApiUtil = require('../../util/ApiUtil'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  getInitialState: function() {
    return {divNameClass: " appear", divCountClass: " disappear"}
  },
  showCount: function() {
    this.setState({
      divNameClass: " disappear",
      divCountClass: " appear"
    })
  },

  showName: function() {
    this.setState({
      divNameClass: " appear",
      divCountClass: " disappear"
    })
  },

  render: function() {
    var category = this.props.category

      var url = "/categories/" + category.id;
    return (<Link className="category-index-item" id={this.props.catId} key={category.id} to={url} onMouseEnter={this.showCount} onMouseLeave={this.showName}>
                <div className={"category-name" + this.state.divNameClass} >{category.name}</div>
                <div className={"category-count" + this.state.divCountClass}>{category.projects.length} Projects!</div>
            </Link>)
  }
})
