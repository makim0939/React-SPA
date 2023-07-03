import React from "react";
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="slectMode">
        <select name="" id="">
          <option value="none">none</option>
        </select>
      </div>
      <ul>
        <li>
          <Link to={"home"}>HOME</Link>
        </li>
        <li>
          <Link to={"about"}>ABOUT</Link>
        </li>
        <li>
          <Link to={"contact"}>CONTACT</Link>
        </li>
      </ul>
      <hr id="bar" />
    </div>
  );
}

export default Header;
