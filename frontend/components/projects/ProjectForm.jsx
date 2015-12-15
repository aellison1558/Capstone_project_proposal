var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin');
    // CategoryStore = require('../../stores/CategoryStore');

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
      category_id: 0
    }
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

  render: function(){

    return(
      <form onSubmit={this.submitHandler}>

        <label>
          Category:
          <select valueLink={this.linkState('title')}>
            <option value={1}>Superweapons</option>
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
    )
  }
});
