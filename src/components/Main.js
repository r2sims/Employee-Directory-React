import React from "react";
import api from "../API";
import Table from "./Table";
import Filter from "./Filter";

class Main extends React.Component {
  state = {
    users: [],
    sortedUsers: [],
    order: "descend",
  };
  headings = [
    { name: "Image", width: "5%", cursor: "", font: "" },
    { name: "Name", width: "10%", cursor: "pointer", font: "fas fa-sort" },
    { name: "Email", width: "10%", cursor: "", font: "" },
    { name: "Phone", width: "10%", cursor: "", font: "" },
    { name: "Gender", width: "5%", cursor: "", font: "" },
  ];

  sortUsers = (heading) => {
    if (this.state.order === "descend") {
      this.setState({ order: "ascend" });
    } else {
      this.setState({ order: "descend" });
    }
    const compare = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedData = this.state.sortedUsers.sort(compare);
    this.setState({ sortedUsers: sortedData });
  };

  filterByGender = (event) => {
    const filtered = event.target.value;
    const filteredArr = this.state.users.filter((item) => {
      let team = Object.values(item);
      return team.indexOf(filtered) === -1;
    });
    this.setState({ sortedUsers: filteredArr });
  };
  componentDidMount() {
    api.addUsers().then((res) =>
      this.setState({
        users: res.data.results,
        sortedUsers: res.data.results,
      })
    );
  }

  render() {
    return (
      <div>
        <Filter filterByGender={this.filterByGender} />
        <Table
          sortUsers={this.sortUsers}
          users={this.state.sortedUsers}
          headings={this.headings}
        />
      </div>
    );
  }
}

export default Main;