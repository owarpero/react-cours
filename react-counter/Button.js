import React from "react";
//import Counters from "./Counter";
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.options.initial ? this.props.options.initial : 0
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  checkRange(value) {
    return (
      value <= this.props.options.maxRange &&
      value >= this.props.options.minRange
    );
  }
  componentDidMount() {
    document
      .querySelector(`[data-option='${this.incr}']`)
      .addEventListener("click", this.props.sumOfAll);
    document
      .querySelector(`[data-option='${this.decr}']`)
      .addEventListener("click", this.props.sumOfAll);
  }
  newValue(value) {
    let currentValue = this.state.value + parseInt(value);
    if (this.checkRange(currentValue)) {
      this.setState({ value: currentValue });
    }
  }

  clickHandler(e) {
    return this.newValue(e.target.getAttribute("data-option"));
  }
  render() {
    const value = this.state.value;
    this.decr = this.props.options.decrStep ? this.props.options.decrStep : -1;
    this.incr = this.props.options.incrStep ? this.props.options.incrStep : 1;

    return (
      <div>
        <button data-option={this.decr} onClick={this.clickHandler}>
          -
        </button>
        <span> {value} </span>
        <button data-option={this.incr} onClick={this.clickHandler}>
          +
        </button>
      </div>
    );
  }
}
