import React, { Component } from "react";

class Navbar extends Component {
  getTotal = () => {
    const total = this.props.counters
      .map(counter => {
        return counter.value;
      })
      .reduce((x, y) => x + y);

    return total;
  };

  getBadgeClasses() {
    let badgevalue = "badge-pill badge badge-";
    badgevalue += this.getTotal() === 0 ? "danger" : "success";
    return badgevalue;
  }
  

  render() {
    return (
      <nav className="navbar navbar-light bg-secondary">
        <a href="#" className="navbar-brand font-weight-bold">
          The Great Tawhid's App{" "}
        </a>

        <h4>
          {" "}
          Total Value
          <span className={this.getBadgeClasses()}>{this.getTotal()}</span>
        </h4>
        <h4>
          {" "}
          Total Counters
          <span className="badge-pill badge-success badge">
            {this.props.totalCounters}
          </span>
        </h4>
      </nav>
    );
  }
}

export default Navbar;
