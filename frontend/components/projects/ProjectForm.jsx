var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin'),
    Link = require('react-router').Link;;
    CategoryStore = require('../../stores/CategoryStore'),
    ProjectStore = require('../../stores/ProjectStore');

module.exports = React.createClass({
  mixins: [LinkStateMixin],

  getInitialState: function() {
    if (this.props.params.projectId) {
      var project = ProjectStore.find(this.props.params.projectId)
      initialState = {
        title: project.title,
        summary: project.summary,
        description: project.description,
        goal_amt: project.goal_amt,
        current_amt: project.current_amt,
        start_date: project.start_date,
        end_date: project.end_date,
        category_id: project.category_id,
        categories: CategoryStore.all(),
        errors: ""
      }
    }
    else {
      initialState = {
        title: "",
        summary: "",
        description: "",
        goal_amt: 0,
        current_amt: 0,
        start_date: new Date(),
        end_date: new Date(),
        category_id: 0,
        categories: CategoryStore.all(),
        errors: ""
      }
    }
    return initialState;
  },

  listeners: [],

  _updateState: function() {
    this.setState({ categories: CategoryStore.all() });
  },

  componentDidMount: function() {
    this.listeners.push(CategoryStore.addListener(this._updateState));
    ApiUtil.fetchAllCategories();
  },

  submitHandler: function(e) {
    e.preventDefault();

    var project = {
      title: this.state.title,
      summary: this.state.summary,
      description: this.state.description,
      goal_amt: this.state.goal_amt,
      current_amt: this.state.current_amt,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      category_id: this.state.category_id

    }

    if (this.state.title &&
        this.state.description &&
        this.state.category_id &&
        this.state.goal_amt &&
        this.state.start_date &&
        this.state.end_date
    ) {
      if (this.props.params.projectId) {
        ApiUtil.updateProject(this.props.params.projectId, project);
        this.props.history.push('/projects/' + this.props.params.projectId);
      } else {
        ApiUtil.createProject(project);
        this.props.history.push('/categories/' + this.state.category_id);
      }
    } else {
      this.setState({errors: "something went wrong"})
    }
  },

  selectHandler: function(e) {
    this.setState({category_id: e.target.value})
  },

  render: function(){
    var current_val
    var categories = this.state.categories.map(function(category) {
      return <option key={category.id} value={category.id}>{category.name}</option>
    });

    return(
      <div className="project-form">
        <div>{this.state.errors}</div>

        <form onSubmit={this.submitHandler}>
          <div className="form-group" >
            <label>
              Category:
            </label>
              <select className="form-control" onChange={this.selectHandler} value={this.state.category_id}>
                <option key={0} value="" disabled={true}>Select Project Category</option>
                {categories}
              </select>
            <br/>
          </div>

          <div className="form-group" >
            <label>
              Title:
            </label>
            <input type="string" className="form-control" valueLink={this.linkState('title')}/>
            <br/>
          </div>

          <div className="form-group" >
            <label>
              Summary:
            </label>
            <input type="string" className="form-control" valueLink={this.linkState('summary')}/>
            <br/>
          </div>

          <div className="form-group" >
            <label>
              Description:
            </label>
            <textarea className="form-control" rows="10" valueLink={this.linkState('description')}></textarea>
            <br/>
          </div>

          <div className="form-group" >
            <label>
              Funding Goal:
            </label>
            <input className="form-control" type="number" valueLink={this.linkState('goal_amt')}/>
            <br/>
          </div>

          <div className="form-group" >
            <label>
              Funding Start Date:
            </label>
            <input type="date" className="form-control" valueLink={this.linkState('start_date')}/>
            <br/>
          </div>

          <div className="form-group" >
            <label>
              Funding End Date:
            </label>
            <input type="date" className="form-control" valueLink={this.linkState('end_date')}/>
            <br/>
          </div>

          <input type='submit' value="Create Project" />
        </form>
      </div>
    )
  }
});
