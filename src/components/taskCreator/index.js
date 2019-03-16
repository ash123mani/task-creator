import React from "react";
import { Form, Input, Button, DatePicker, TimePicker } from "antd";
import { createTask } from "../../utils/createTask";
import "antd/dist/antd.css";
import "./index.scss";

class TaskCreatorForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
      if (values.date && values.time && values.date) {
        createTask(values);
        this.props.setTasks();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const taskNameConfig = {
      rules: [{ required: true, message: "Task Name is Required" }]
    };
    const taskDetailsConfig = {
      rules: [{ required: false }]
    };
    const timeConfig = {
      rules: [{ type: "object", required: true, message: "Please select time!" }]
    };
    const dateConfig = {
      rules: [{ type: "object", required: true, message: "Please select date!" }]
    };

    return (
      <Form onSubmit={this.handleSubmit} className="task">
        <Form.Item label="Task Name    ">
          {getFieldDecorator("taskName", taskNameConfig)(<Input placeholder="Task Name" className="task-name" />)}
        </Form.Item>

        <Form.Item label="Task Description (Optional)">
          {getFieldDecorator("taskDetails", taskDetailsConfig)(
            <Input placeholder="Task Description" className="task-details" />
          )}
        </Form.Item>
        <div className="moment">
          <Form.Item label="DatePicker">
            {getFieldDecorator("date", dateConfig)(<DatePicker className="task-date" />)}
          </Form.Item>

          <Form.Item label="TimePicker">
            {getFieldDecorator("time", timeConfig)(<TimePicker use12Hours format="h:mm a" className="task-time" />)}
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Create Task
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const TaskCreator = Form.create({ name: "task_form" })(TaskCreatorForm);

export default TaskCreator;
