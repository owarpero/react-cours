import React from "react";
import Form from "../model/Form";

export default class FormToAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      select: "Cleaner",
      radioGroup: {
        no: true,
        yes: false
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handelRadio = this.handelRadio.bind(this);
    this.handelChange = this.handelChange.bind(this);
  }
  handelRadio(e) {
    let object = {};
    object[e.target.value] = e.target.checked;
    this.setState({ radioGroup: object });
  }
  handelChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    this.props.newWorker(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Form
          handelRadio={this.handelRadio}
          handelChange={this.handelChange}
          state={this.state}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
