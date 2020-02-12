import React from "react";
import Table from "./model/Table";
import Form from "./controller/form";
import nanoid from "nanoid";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
    this.newWorker = this.newWorker.bind(this);
  }
  newWorker(parentState) {
    let newValue = this.state.people;
    parentState.id = nanoid();
    newValue.push(parentState);
    this.setState({ people: newValue });
  }
  render() {
    return (
      <div className="wrapper">
        <Form newWorker={this.newWorker} />
        <Table state={this.state} />
      </div>
    );
  }
}

export default App;
