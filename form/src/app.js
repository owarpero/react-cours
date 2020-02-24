import React from "react";
import Table from "./table/Table.jsx";
import Form from "./form/form";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      valueToEdit: {
        name: "",
        select: "junior",
        contractor: false,
        id: null,
        submitValue: "Add",
        disabled: true
      }
    };
    this.findById = this.findById.bind(this);
    this.newWorker = this.newWorker.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  newWorker(parentState) {
    let newValue = this.state.people;
    parentState.deleteItem = this.deleteItem.bind(this, parentState.id);
    newValue.push(parentState);
    this.setState({ people: newValue });
  }
  findById(id) {
    let indexOfEl = null;
    this.state.people.forEach((item, index) =>
      id === item.id ? (indexOfEl = index) : null
    );
    return indexOfEl;
  }

  deleteItem(id) {
    let state = this.state.people;
    state.splice(this.findById(id), 1);
    this.setState({ people: state });
  }

  render() {
    return (
      <div className="wrapper">
        <Form
          newWorker={this.newWorker}
          AppState={this.state}
          findById={this.findById}
          deleteItem={this.deleteItem}
        />
        <Table state={this.state} />
      </div>
    );
  }
}

export default App;
