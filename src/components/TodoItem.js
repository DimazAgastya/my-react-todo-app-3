import React from "react";

const TodoItem = (props) => {
	/* 

	const item = [
		{
			id: 1,
			text: "Membuang sampah",
			completed: true,
		},
		{
			id: 2,
			text: "Membuat rotu",
			completed: false,
		},
		{
			id: 3,
			text: "Belajar React",
			completed: false,
		},
	];

     value ke complete
     label ke text
    */

	// input => untuk mengetahhui apakah sudah di centang atau belum
	// label =>  memberikan hasil berupa text

	return (
		<>
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value={`todo-item-check-${props.item.completed}`} id={`todo-item-check-${props.item.id}`} />
				<label className="form-check-label" htmlFor="todo-item-check-1">
					{props.item.text}
				</label>
			</div>
		</>
	);
};

export default TodoItem;
