import React from "react";
import ReactDOM from "react-dom";
import 'typeface-roboto';
import "./index.css";
import NewApp from "./NewApp";

// import App from "./App";
// import Container from "./Components/Units/Component/Containers/Container"

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<NewApp />, document.getElementById("root"));
serviceWorker.unregister();
