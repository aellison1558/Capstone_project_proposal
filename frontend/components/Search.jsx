var React = require('react'),
    LinkStateMixin = require('react-addons-linked-state-mixin'),
    Link = require('react-router').Link,
    Modal = require('react-bootstrap').Modal,
    Fuse = require('fuse.js');

var Search = React.createClass({
  mixins: [LinkStateMixin],

  getInitialState: function() {
    return { inputVal: "", showModal: false };
  },

  clearSearch: function(e) {
    this.setState({inputVal: ""});
  },

  matches: function () {
    var projects = this.props.projects;
    var projectsArray = [];
    for (key in projects) {
      if (projects.hasOwnProperty(key)) {
        projectsArray.push(projects[key]);
      }
    }

    var options = {
      caseSensitive: false,
      includeScore: false,
      shouldSort: true,
      threshold: 0.3,
      keys: ['title', 'summary', 'description']
    }

    var fuse = new Fuse(projectsArray, options)
    return fuse.search(this.state.inputVal);
  },

  render: function(){
    var items = "no matches";

    if (this.matches()) {
      items = this.matches().map(function(project){
        var url = '/projects/' + project.id;
        return <li key={project.id}><Link to={url}>{project.title}</Link></li>
      })
    }

    return(
      <div>
        <form className="navbar-form navbar-left" role="search" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search Projects" valueLink={this.linkState('inputVal')}/>
          </div>
        </form>

        <ul onClick={this.clearSearch}  className="search-results">
          {items}
        </ul>
      </div>
    )
  }
});

module.exports = Search;
