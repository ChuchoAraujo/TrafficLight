import React from "react";
import Light from "./light.jsx";
import { useState } from "react";


const Aplication = () => {

	const colors = ["red", "yellow", "green"]; // Array de los colores del semaforo

	const [change, setChange] = useState("red")

	return (
	<div className="row container-fluid">
		<div className="col-4"></div>
		<div className="aplication">
			{colors.map((color) => {
				return <Light 
				        color= {color}
						change={change}
						setChange= {setChange}
						/>
			})}
			<div className="col-4"></div>
		</div>
	</div>
		
	);
};

export default Aplication;
