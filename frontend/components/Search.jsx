var React = require('react'),
    LinkStateMixin = require('react-addons-linked-state-mixin'),
    Link = require('react-router').Link,
    Modal = require('react-bootstrap').Modal;

var Search = React.createClass({
  mixins: [LinkStateMixin],

  getInitialState: function() {
    return { inputVal: "", showModal: false };
  },

  handleSubmit: function(e) {
    e.preventDefault()
    this.open();
  },

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },

  matches: function () {
    var matches = [];
    if(this.state.inputVal.length === 0) {
      return null;
    }

    var projects = this.props.projects;
    for (key in projects) {
      var sub = projects[key].title.slice(0, this.state.inputVal.length);

      if(sub.toLowerCase() === this.state.inputVal.toLowerCase()){
        matches.push(projects[key]);
      }
    }

    return matches;
  },

  render: function(){
    var items = "no matches";

    if (this.matches()) {
      items = this.matches().map(function(project){
        var url = '/api/projects/' + project.id;
        return <li key={project.id}><Link to={url}>{project.title}</Link></li>
      })
    }

    return(
      <div>
        <form className="navbar-form navbar-left" role="search" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" valueLink={this.linkState('inputVal')}/>
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </form>
        <Modal show={this.state.showModal} onHide={this.close}>

          <Modal.Header closeButton>
            <Modal.Title>Search Results:</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ul>
              {items}
            </ul>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
});

module.exports = Search;
