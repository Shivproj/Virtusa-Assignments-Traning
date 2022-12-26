import React from "react";

class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Shiv Sai",
      age: 20,
      gender: "Male",
      group: 1,
    };
  }

  changeGroup() {
    if (this.state.group == 1) {
      this.setState({ ...this.state, group: 2 });
    } else if (this.state.group == 2) {
      this.setState({ ...this.state, group: 3 });
    } else if (this.state.group == 3) {
      this.setState({ ...this.state, group: 1 });
    }
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Group: {this.state.group}</p>
        <button onClick={() => this.changeGroup()}>Change Group</button>
      </div>
    );
  }
}
export default Student;
