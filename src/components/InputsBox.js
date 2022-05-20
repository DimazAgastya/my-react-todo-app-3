import React, { useState } from "react";
import { KEY_RETURN } from "keycode-js";

const InputsBox = (props) => {
	// mengatur nilai
	const [value, SetValue] = useState("");

	const handleChangeEvent = (event) => {
		SetValue(event.target.value);
	};

	// akan dijalankan jika kondisi nya
	const handleKeyUpEvent = (event) => {
		if (event.keyCode === KEY_RETURN) {
			props.addNewItem(event.target.value);
			SetValue("");
		}
	};

	return <input type="text" className="form-control add-todo" placeholder="add New" onChange={handleChangeEvent} value={value} onKeyUp={handleKeyUpEvent}></input>;
};

export default InputsBox;
