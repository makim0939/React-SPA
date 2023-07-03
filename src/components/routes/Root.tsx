import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

//import components
import Header from "../Header";

function Root() {
  const navigate = useNavigate();
  useEffect(() => {
    //マウント時homeに遷移
    navigate("home");
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="title">
        <h1>- REACT-SPA -</h1>
      </div>
      <div>
        <Outlet />
      </div>
      <div id="transFill"></div>
    </>
  );
}

export default Root;
