import React from "react";
import Form from "../model/Form";

export default class FormToAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      select: "Cleaner",
      contractor: false
    };
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
  onSubmit(e) {
    this.props.newWorker(this.state);
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
