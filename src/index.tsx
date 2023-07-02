//import packages
import React from "react";
import { createRoot } from "react-dom/client";

// import stylesheet
import "./style.scss";

//import components
import App from "./App";

//main
const container = document.createElement("div");
const root = createRoot(container);
root.render(<App />);
document.body.appendChild(container);
