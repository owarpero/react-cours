import React from "react";
import TableJSX from "../model/Table";
import Form from "../controller/form";
export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
    this.newWorker = this.newWorker.bind(this);
  }
  newWorker(parentState) {
    let newValue = this.state.people;
    newValue.push(parentState);
    this.setState({ people: newValue });
  }
  render() {
    return (
      <div>
        <Form newWorker={this.newWorker} />
        <TableJSX state={this.state} />
      </div>
    );
  }
}
