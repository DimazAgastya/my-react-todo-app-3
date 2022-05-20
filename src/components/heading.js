import React from "react";
import InputsBox from "./InputsBox";

const title = "Things to do";

const heading = (props) => {
	return (
		<>
			<h1>{title}</h1>
			<InputsBox addNewItem={props.addNewItem} />
		</>
	);
};

export default heading;
