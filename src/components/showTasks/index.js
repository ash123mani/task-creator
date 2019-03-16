import React from "react";
import { List } from "antd";
import moment from "moment";
import "./index.scss";

class ShowTasks extends React.Component {
  render() {
    return (
      <div className="show-tasks">
        {this.props.showTypeOf === "upcoming" ? (
          <List
            size="small"
            bordered
            dataSource={this.props.tasks.slice(0, 3)}
            renderItem={item => (
              <List.Item>{`${item.taskName} \xa0\xa0\xa0\xa0\xa0\xa0\xa0  ${moment(item.time).format(
                "hh:mm:ss a"
              )}`}</List.Item>
            )}
          />
        ) : (
          <List
            size="small"
            bordered
            dataSource={this.props.tasks}
            renderItem={item => (
              <List.Item>{`${item.taskName} \xa0\xa0\xa0\xa0\xa0\xa0\xa0  ${moment(item.time).format(
                "hh:mm:ss a"
              )}`}</List.Item>
            )}
          />
        )}
      </div>
    );
  }
}

export default ShowTasks;
