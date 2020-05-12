import React from "react";
import ReactDOM from "react-dom";
import 'typeface-roboto';
import "./index.css";
import NewApp from "./Components/NewApp";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<NewApp />, document.getElementById("root"));
serviceWorker.unregister();
