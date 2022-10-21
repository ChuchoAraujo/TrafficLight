//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Aplication from "./component/app.jsx"


//render your react application
ReactDOM.render(<Aplication />, document.querySelector("#app"));
