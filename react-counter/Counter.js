import React from "react";
import Button from "./Button";
export default class Counters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.initials()
    };
    this.sumOfAll = this.sumOfAll.bind(this);
  }
  sumOfAll(e) {
    this.setState({
      value: this.state.value + parseInt(e.target.getAttribute("data-option"))
    });
  }
  initials() {
    let count = 0;
    for (let i = 0; i < this.props.options.length; i++) {
      count += this.props.options[i].initial;
    }
    return count;
  }
  render() {
    return (
      <div>
        <Button options={this.props.options[0]} sumOfAll={this.sumOfAll} />
        <Button options={this.props.options[1]} sumOfAll={this.sumOfAll} />
        <Button options={this.props.options[2]} sumOfAll={this.sumOfAll} />
        <span> {this.state.value} </span>
      </div>
    );
  }
}
