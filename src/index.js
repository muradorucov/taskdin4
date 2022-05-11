import React from "react";

import ReactDOM from "react-dom";

import "./index.css";

import App from "./component/App";
import "./component/menu/menu.css";
import "./component/tools/tools.css";
import "./component/contents/content-info/content-info.css";
import "./component/contents/content/content.css";
import "./component/navbar/navbar.css";
import "./responsive/responsive.css";

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
