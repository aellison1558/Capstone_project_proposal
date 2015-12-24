var React = require('react'),
    ProjectIndex = require('../projects/ProjectIndex'),
    Link = require('react-router').Link,
    CategoryStore = require('../../stores/CategoryStore');

module.exports = React.createClass({
  componentWillMount: function() {
    if (this.props.location.action === 'POP') {
      $.get('/', {}, function() {});
    }
  },

  editButtonHandler: function(id) {
    var url = '/projects/' + id + '/edit';
    console.log(url);
    this.props.history.push(url);
  },

  render: function() {


    return(

      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000}  transitionEnterTimeout={1000} transitionLeaveTimeout={1000} >
        <div className="category-show">
          <Link to="/categories">Back to Categories</Link>
          <ProjectIndex editButtonHandler={this.editButtonHandler} categoryId={this.props.params.categoryId} />
        </div>
      </ReactCSSTransitionGroup>
    )
  }
});
