import React from "react";

function TableBody(props) {
  return (
    <tbody className="text-center">
      {props.users.map((user) => {
        return (
          <tr key={user.login.uuid}>
            <td>
              <img alt={user.name.first} src={user.picture.medium}></img>
            </td>
            <td>
              <h4>
                {user.name.first} {user.name.last}
              </h4>
            </td>
            <td>
              <h4>
                <a href={"mailto:" + user.email}>{user.email}</a>
              </h4>
            </td>
            <td>
              <h4>{user.phone}</h4>
            </td>
            <td>
              <h4>{user.gender.split("")[0].toUpperCase()}</h4>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;