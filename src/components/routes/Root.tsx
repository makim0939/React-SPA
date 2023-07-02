import React from "react";
import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to={"home"}>Home</Link>
          </li>
          <li>
            <Link to={"about"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"contact"}>CONTACT</Link>
          </li>
        </ul>
        <hr />
      </header>
      <h1>REACT-SPA</h1>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
