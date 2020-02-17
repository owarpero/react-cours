import React from "react";
import Form from "../model/Form";
import nanoid from "nanoid";
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
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  editItem(Itemid) {
    const { AppState, findById } = this.props;
    const userData = AppState.people[findById(Itemid)];

    let { name, select, contractor, id } = this.state;
    name = userData.name;
    select = userData.select;
    contractor = userData.contractor;
    id = userData.id;

    return this.setState({
      name,
      select,
      contractor,
      id,
      submitValue: "Update"
    });
  }
  onSubmit(e) {
    if (this.state.submitValue === "Update") {
      this.props.deleteItem(this.state.id);
      this.setState({ submitValue: "Add" });
    }
    let newState = this.state;
    newState.id = nanoid();
    newState.editItem = this.editItem.bind(this, this.state.id);
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
