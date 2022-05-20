import TodoList from "./TodoList";
import React, { useState } from "react";

function App() {
	const [items, setItems] = useState([]);

	const addNewItem = (text) => {
		setItems((items) => {
			const nextId = items.length + 1;
			const newItem = {
				id: nextId,
				text: text,
			};
			return [...items, newItem];
		});
	};
	// setelah row beri items untuk menunjukan hasil

	return (
		<div className="container">
			<div className="row">
				<TodoList items={items} addNewItem={addNewItem} />
			</div>
		</div>
	);
}

export default App;
