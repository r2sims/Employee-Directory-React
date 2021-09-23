import React from "react";

function Filter(props) {
  return (
    <form className="pb-3 font-monospace">
      <select name="filter" onChange={(event) => props.filterByGender(event)}>
        <option>Selection</option>
        <option value="male">Female</option>
        <option value="female">Male</option>
        <option value="">See All</option>
      </select>
    </form>
  );
}

export default Filter;