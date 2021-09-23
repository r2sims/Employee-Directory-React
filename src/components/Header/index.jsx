
  import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory EDR Sytems</h1>
      <p className="text-center">
        Click on the column headers to filter by category or use the search box to narrow
        your results.
      </p>
    </header>
  );
};

export default Header;