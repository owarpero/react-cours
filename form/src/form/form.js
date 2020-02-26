import React from "react";
import nanoid from "nanoid";
import positon from "../global/positOption";

export default class FormToAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.AppState.valueToEdit;
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let disabled = this.state.disabled;
    const name = target.name;

    if (target.type === "select-one") {
      let check = this.checkPermission(value);
      disabled = check;
    }

    this.setState({
      [name]: value,
      disabled
    });
  };
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
  onSubmit = e => {
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
  };
  render() {
    const positOption = positon.getPositions().map(pos => (
      <option key={pos.key} value={pos.titel}>
        {pos.titel}
      </option>
    ));
    const { select, submitValue, disabled, contractor, name } = this.state;
    return (
      <div>
        <form action="#" onSubmit={this.onSubmit}>
          <div>
            <input
              className="user-input"
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={name}
              placeholder="Name"
            />
          </div>
          <div className="select">
            <select
              name="select"
              value={select}
              onChange={this.handleInputChange}
            >
              {positOption}
            </select>
          </div>
          <div>
            <input type="submit" value={submitValue} />
            <span className="sign-in">Contractor?</span>
          </div>
          <input
            disabled={disabled}
            checked={contractor}
            name="contractor"
            type="checkbox"
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}
