import React from "react";
import Form from "./Form.jsx";
import nanoid from "nanoid";
import positon from "../global/positOption";
export default class FormToAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.AppState.valueToEdit;
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let disabled = this.state.disabled;
    const name = target.name;

    if (target.type === "select-one") {
      disabled = this.checkPermission(value);
    }
    this.setState({
      [name]: value,
      disabled
    });
  }
  checkPermission(value) {
    let disabled;
    positon
      .getPositions()
      .forEach(pos =>
        value === pos.titel ? (disabled = pos.permission) : null
      );

    return disabled;
  }

  editItem(Itemid) {
    const { AppState, findById } = this.props;
    const userData = AppState.people[findById(Itemid)];

    let { name, select, contractor, id } = this.state;
    name = userData.name;
    select = userData.select;
    contractor = userData.contractor;
    id = userData.id;
    let disabled = this.checkPermission(userData.select);
    return this.setState({
      name,
      select,
      contractor,
      id,
      disabled,
      submitValue: "Update"
    });
  }
  onSubmit(e) {
    if (this.state.submitValue === "Update") {
      this.props.deleteItem(this.state.id);
      this.setState(this.props.AppState.valueToEdit);
    }

    let newState = this.state;
    newState.id = nanoid();
    newState.editItem = this.editItem.bind(this, this.state.id);

    this.setState(this.props.AppState.valueToEdit);
    this.props.newWorker(newState);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <Form
          handleInputChange={this.handleInputChange}
          state={this.state}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
