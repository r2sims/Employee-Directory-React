import React from "react";

function TableHead(props) {
  return (
    <thead className="table-dark">
      <tr>
        {props.headings.map(({ name, width, cursor, font }) => {
          return (
            <th
              className="text-center py-3"
              key={name}
              style={{ width, cursor }}
              onClick={() => {
                props.sortUsers(name.toLowerCase());
              }}
            >
              {name} <i className={font}></i>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHead;