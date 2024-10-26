import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const { counter } = this.props;
    return counter.value === 0 ? "Zero" : counter.value;
  }

  getMethodClasses() {
    let classes = "bg m-2 p-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    const { onIncrement, onDelete } = this.props;
    return (
      <div>
        <span className={ this.getMethodClasses() }>{this.formatCount()}</span>
        <button
          className="btn btn-sm btn-primary m-2"
          onClick={() => onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
