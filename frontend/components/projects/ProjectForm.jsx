var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin'),
    CategoryStore = require('../../stores/CategoryStore'),
    ProjectStore = require('../../stores/ProjectStore');

module.exports = React.createClass({
  //setup
  mixins: [LinkStateMixin],

  getInitialState: function() {
    var initialState = {};

    if (this.props.params.projectId) {
      var project = ProjectStore.find(this.props.params.projectId)

      for (key in project) {
        if (project.hasOwnProperty(key)) {
          initialState[key] = project[key];
        }
      };

      initialState['categories'] = CategoryStore.all();
      initialState['errors'] = [];
    }
    else {
      initialState = {
        title: "",
        summary: "",
        description: "",
        goal_amt: 0,
        start_date: new Date(),
        end_date: new Date(),
        category_id: 0,
        categories: CategoryStore.all(),
        errors: []
      }
    }

    return initialState;
  },

  listeners: [],


  componentDidMount: function() {
    this.listeners.push(CategoryStore.addListener(this._updateState));
    ApiUtil.fetchAllCategories();
  },

  componentWillUnmount: function() {
    this.listeners.forEach(function(listener) {
      listener.remove();
    })
  },

  //handlers

  submitHandler: function(e) {
    e.preventDefault();

    var project = this._stateProjectProperties();

    if (this._validProperties()[0]) {

      if (this.props.params.projectId) {
        ApiUtil.updateProject(this.props.params.projectId, project);
        this.props.history.push('/projects/' + this.props.params.projectId);
      } else {
        ApiUtil.createProject(project);
        this.props.history.push('/categories/' + this.state.category_id);
      }

    } else {

      this.setState({errors: this._validProperties()[1]})

    }
  },

  selectHandler: function(e) {
    this.setState({category_id: e.target.value})
  },

  sampleProject: function(e) {
    e.preventDefault();

    this.setState({
      title: "Better Power Converters",
      summary: "Longer lasting, more reliable power converters",
      description: 'Power converters are notoriously short-lived, requiring many an errand run to pick up more.  I have a better design that will cut trips to the station in half!',
      goal_amt: 1000000,
      start_date: new Date(2016, 1, 1),
      end_date: new Date(2016, 3, 1),
      category_id: 6,
      categories: CategoryStore.all(),
      errors: []
    })
  },

  //render

  render: function(){
    var current_val
    var categories = this.state.categories.map(function(category) {
      return <option key={category.id} value={category.id}>{category.name}</option>
    });

    var submitText = this.props.params.projectId ? "Update Project" : "Create Project";

    return(
      <ReactCSSTransitionGroup transitionName="contentfade" transitionAppear={true} transitionAppearTimeout={1000}  transitionEnterTimeout={1000} transitionLeaveTimeout={1000} >
        <div className="project-form">
          <ul>{this.state.errors.map(function(error) {return <li>{error}</li>})}</ul>

          <form onSubmit={this.submitHandler}>
            <button onClick={this.sampleProject}>Sample Project</button>
            <div className="form-group" >
              <label>
                Category:
              </label>
                <select className="form-control" onChange={this.selectHandler} value={this.state.category_id}>
                  <option key={0} value="" disabled={true}>Select Project Category</option>
                  {categories}
                </select>
            </div>

            <div className="form-group" >
              <label>
                Title:
              </label>
              <input type="string" className="form-control" valueLink={this.linkState('title')}/>
            </div>

            <div className="form-group" >
              <label>
                Summary:
              </label>
              <input type="string" className="form-control" valueLink={this.linkState('summary')}/>
            </div>

            <div className="form-group" >
              <label>
                Description:
              </label>
              <textarea className="form-control" rows="10" valueLink={this.linkState('description')}></textarea>
            </div>

            <div className="form-group" >
              <label>
                Funding Goal:
              </label>
              <input className="form-control" type="number" valueLink={this.linkState('goal_amt')}/>
            </div>

            <div className="form-group" >
              <label>
                Funding Start Date:
              </label>
              <input type="date" className="form-control" valueLink={this.linkState('start_date')}/>
            </div>

            <div className="form-group" >
              <label>
                Funding End Date:
              </label>
              <input type="date" className="form-control" valueLink={this.linkState('end_date')}/>
            </div>

            <input className='submit' type='submit' value={submitText} />
          </form>
        </div>
      </ReactCSSTransitionGroup>
    )
  },

  //helper functions

  _updateState: function() {
    this.setState({ categories: CategoryStore.all() });
  },

  _validProperties: function() {
    var start = new Date(this.state.start_date);
    var end = new Date(this.state.end_date);
    var today = new Date();
    var elapsed = Date.parse(end) - Date.parse(start)
    var errors = [];
    var validated = true;
    if (!this.state.title) {
      errors.push("Title can't be blank");
      validated = false;
    };

    if (!this.state.description) {
      errors.push("Description can't be blank");
      validated = false;
    };

    if (!this.state.category_id) {
      errors.push("Category can't be blank");
      validated = false;
    };

    if (!this.state.goal_amt) {
      errors.push("Funding Goal can't be blank");
      validated = false;
    };

    if (!this.state.start_date) {
      errors.push("Start date can't be blank");
      validated = false;
    };

    if (!this.state.end_date) {
      errors.push("End date can't be blank");
      validated = false;
    };

    if (elapsed < 0) {
      errors.push("End date must come after start date");
      validated = false;
    };

    if (Date.parse(start) - Date.parse(today) < 0) {
      errors.push("Must choose a future date for start date");
      validated = false;
    }

    return [validated, errors];
  },

  _stateProjectProperties: function(){
    return{
      title: this.state.title,
      summary: this.state.summary,
      description: this.state.description,
      goal_amt: this.state.goal_amt,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      category_id: this.state.category_id
    }
  }
});
