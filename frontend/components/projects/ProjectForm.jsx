var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin'),
    Link = require('react-router').Link;;
    CategoryStore = require('../../stores/CategoryStore');

module.exports = React.createClass({
  mixins: [LinkStateMixin],

  getInitialState: function() {
    return {
      title: "",
      summary: "",
      description: "",
      goal_amt: 0,
      current_amt: 0,
      start_date: new Date(),
      end_date: new Date(),
      category_id: 0,
      categories: CategoryStore.all()
    }
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

    ApiUtil.createProject(project);
  },

  selectHandler: function(e) {
    this.setState({category_id: e.target.value})
  },

  render: function(){
    var categories = this.state.categories.map(function(category) {
      return <option key={category.id} value={1}>{category.name}</option>
    });

    return(
      <div>
        <Link to={'/'}>Back to Home</Link>
        <form onSubmit={this.submitHandler}>

          <label>
            Category:
            <select onChange={this.selectHandler}>
              <option key={0} value="" disabled={true}>Select Project Category</option>
              {categories}
            </select>
          </label>
          <br/>

          <label>
            Title:
            <input type="string" valueLink={this.linkState('title')}/>
          </label>
          <br/>

          <label>
            Summary:
            <input type="string" valueLink={this.linkState('summary')}/>
          </label>
          <br/>

          <label>
            Description:
            <textarea valueLink={this.linkState('description')}></textarea>
          </label>
          <br/>

          <label>
            Funding Goal:
            <input type="number" valueLink={this.linkState('goal_amt')}/>
          </label>
          <br/>

          <label>
            Funding Start Date:
            <input type="date" valueLink={this.linkState('start_date')}/>
          </label>
          <br/>

          <label>
            Funding End Date:
            <input type="date" valueLink={this.linkState('end_date')}/>
          </label>
          <br/>

          <input type='submit' value="Create Project" />
        </form>
      </div>
    )
  }
});
