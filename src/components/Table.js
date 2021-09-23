import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function Table(props) {
  return (
    <table className="table table-striped">
      <TableHead sortUsers={props.sortUsers} headings={props.headings} />
      <TableBody users={props.users} />
    </table>
  );
}

export default Table;