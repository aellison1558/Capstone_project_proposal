var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    ProjectStore = require('../../stores/ProjectStore'),
    Link = require('react-router').Link,
    BackingsForm = require('./BackingsForm'),
    SessionStore = require('../../stores/SessionStore'),
    SignInForm = require('../SignInForm'),
    UserStore = require('../../stores/UserStore');


module.exports = React.createClass({
  undoBacking: function() {
    var backing = this._findBacking();
    ApiUtil.destroyBacking(backing.id);
  },

  _calcFunding: function() {
    var project = this.props.project || {
      title: "",
      summary: "",
      description: "",
      creator_id: 0,
      category_id: 0,
      images: [],
      backings: [],
      comments: [],
      start_date: new Date(),
      end_date: new Date()
    };
    var backings = project.backings;
    var current_funding = 0;

    backings.forEach(function(backing) {
      current_funding += backing.amount;
    })

    return current_funding;
  },

  _checkBacking: function(){
    var project = this.props.project || {
      title: "",
      summary: "",
      description: "",
      creator_id: 0,
      category_id: 0,
      images: [],
      backings: [],
      comments: [],
      start_date: new Date(),
      end_date: new Date()
    };
    var backings = project.backings;
    var currentUser = SessionStore.currentUser();

    var backingFound = this._findBacking()

    return backingFound ? true : false;
  },

  _findBacking: function() {
    var project = this.props.project;
    var backings = project.backings;
    var currentUser = SessionStore.currentUser();

    return backings.find(function(backing){
      return backing.backer_id === currentUser.id
    });
  },

  render: function() {
    var project = this.props.project || {
      title: "",
      summary: "",
      description: "",
      creator_id: 0,
      category_id: 0,
      images: [],
      backings: [],
      comments: [],
      start_date: new Date(),
      end_date: new Date()
    };

    var backingForm;

    if (SessionStore.currentUser() && this.props.user.id) {
      if (this._checkBacking()) {
        backingForm = <button onClick={this.undoBacking}>Withdraw Support</button>
      } else {
        backingForm = <BackingsForm project={project}/>
      }
    } else {
      backingForm = <div></div>
    }

    return(
      <div>
        <h5>Funding:</h5>
        {this._calcFunding()} out of {project.goal_amt} ({Math.floor((this._calcFunding() / project.goal_amt) * 100)} % of goal)

        <br/>
        {project.backings.length} Backers
        <br/>

        {backingForm}
      </div>
    )
  }
});
