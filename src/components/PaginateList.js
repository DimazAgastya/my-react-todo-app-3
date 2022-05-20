import React, { useState, useEffect } from "react";

const PaginateList = (props) => {
	const [displayedItems, initialItems] = useState([]);

	const [currentPage, initialPage] = useState(props.initialPage);

	const allPage = Math.ceil(props.items.length / props.itemPerPage);

	// maka page sekarang dikurangi 1
	const goToPrev = () => {
		if (currentPage > 1) {
			initialPage(currentPage - 1);
		}
	};

	// maka page sekarang ditambah 1
	const goToNext = () => {
		if (currentPage < allPage) {
			initialPage(currentPage + 1);
		}
	};

	useEffect(() => {
		const startingIndex = (currentPage - 1) * props.itemPerPage;

		const endIndex = startingIndex + props.itemPerPage;

		const newDisplayedItems = props.items.filter((item, index) => index >= startingIndex && index < endIndex);

		initialItems(newDisplayedItems);
	}, [currentPage, props.itemPerPage, props.items]);

	return (
		<div>
			<ul className="list-group list-group-flush">
				{displayedItems.map((item) => (
					<li className="list-group-item" key={item.id}>
						{item.text}
					</li>
				))}
			</ul>
			{allPage > 0 && (
				<div className="page-controller">
					<button className="page-btn" onClick={goToPrev}>
						Prev
					</button>
					page {currentPage} of {allPage}
					<button className="page-btn" onClick={goToNext}>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default PaginateList;
