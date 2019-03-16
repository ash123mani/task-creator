import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import TaskCreator from "../../components/taskCreator";
import ShowTasks from "../../components/showTasks";
import { showType } from "../../actions/index";
import { getTasks } from "../../utils/getTasks";
import "./index.scss";

class TasksContainer extends React.Component {
  onUpComingClick = () => {
    this.props.showType("upcoming");
  };

  onAllClick = () => {
    this.props.showType("all");
  };

  sortDate = (a, b) => {
    var keyA = new Date(a.date),
      keyB = new Date(b.date);
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  };

  render() {
    const { showTypeOf, allTasks } = this.props;
    return (
      <div className="tasks-container">
        <TaskCreator setTasks={this.props.setTasks} />
        <div className="showTasks-container">
          <Button type="deafault" onClick={this.onAllClick} className="all-button">
            All
          </Button>
          <Button type="deafault" onClick={this.onUpComingClick} className="upcoming-button">
            Upcoming
          </Button>
          <ShowTasks showTypeOf={showTypeOf} tasks={allTasks.sort(this.sortDate)} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTasks: () => dispatch({ type: "SET_TASKS", payload: getTasks() }),
    showType: type => dispatch(showType(type))
  };
};

const mapStateToProps = state => {
  return {
    showTypeOf: state.showType.type,
    allTasks: state.allTasks.tasks
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer);
