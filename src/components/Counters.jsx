import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
    render() {
    return (
      <div>
        <button className="btn btn-success btn-m m-2" onClick={this.props.onReset} >Reset</button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
