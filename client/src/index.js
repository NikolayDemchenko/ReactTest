import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Container from "./Components/Units/Component/Containers/Container"
import Unit from './Components/Units/Component/Unit'
import ViewUnit from './Components/Units/Component/ViewUnit'
import * as serviceWorker from "./serviceWorker";

const NewApp=()=>(<div style={{display:"grid",gridTemplateColumns: "1fr 1fr" }}>
<Unit />
<ViewUnit />
</div>)
ReactDOM.render(<Unit />, document.getElementById("root"));
serviceWorker.unregister();
