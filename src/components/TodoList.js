import React from "react";
import PaginateList from "./PaginateList";
import Heading from "./heading";
import Footer from "./Footer";

// pake map habisnya ul ada di stackoverflow kemaren malam cara makenya

const TodoList = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="todo-list">
					<Heading addNewItem={props.addNewItem} />
					<PaginateList items={props.items} initialPage={1} itemPerPage={2} />
					<Footer items={props.items} />
				</div>
			</div>
		</div>
	);
};

export default TodoList;
