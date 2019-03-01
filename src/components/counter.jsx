import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          className="btn btn-outline-info btn-sm"
          onClick={() => this.props.onClickIncrement(this.props.counter)}
        >
          increment
        </button>
        <buttton
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </buttton>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let badgevalue = "badge m-2 badge-";
    badgevalue += this.props.counter.value === 0 ? "warning" : "success";
    return badgevalue;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
