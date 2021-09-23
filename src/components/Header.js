import React from "react";

function Header() {
  return (
    <header className="font-monospace">
      <h1 className="mb-4">Company Directory</h1>
      <p>
        Click on "Name <i className="fas fa-sort"></i>" sort employees or use
        the dropdown menu to filter employees by gender
      </p>
    </header>
  );
}

export default Header;