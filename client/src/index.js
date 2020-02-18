import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Container from "./Components/Containers/Container"
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Container />, document.getElementById("root"));
serviceWorker.unregister();
