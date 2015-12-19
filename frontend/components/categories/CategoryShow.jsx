var React = require('react'),
    ProjectIndex = require('../projects/ProjectIndex'),
    CategoryStore = require('../../stores/CategoryStore');

module.exports = React.createClass({
  editButtonHandler: function(id) {
    var url = '/projects/' + id + '/edit';
    console.log(url);
    this.props.history.push(url);
  },

  render: function() {
    return(

      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000} transitionEnterTimeout={1000} >
        <div>
          <ProjectIndex editButtonHandler={this.editButtonHandler} categoryId={this.props.params.categoryId} />
        </div>
      </ReactCSSTransitionGroup>
    )
  }
});
