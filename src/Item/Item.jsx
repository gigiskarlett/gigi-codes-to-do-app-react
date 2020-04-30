import React from "react";
import "./Item.css";

export const Item = ({
	id,
	crossItem,
	checked,
	value,
	date,
	activateEdit,
	deactivateEdit,
	editTask,
	editing,
}) => {
	return (
		<li className="ListItem" key={id}>
			<div className="TitleCont">
				<input
					onChange={crossItem}
					checked={checked}
					className="CheckBox"
					type="checkbox"
				/>
				{!editing && (
					<p
						onClick={activateEdit}
						className={checked ? "Strike ToDoText" : "ToDoText"}
					>
						{value}
					</p>
				)}
				{editing && (
					<form onSubmit={deactivateEdit} className="Editing">
						<input
							type="text"
							onChange={editTask}
							className={checked ? "Strike ToDoText" : "ToDoText"}
							value={value}
						/>
					</form>
				)}
			</div>
			<span className="DateText">{date}</span>
		</li>
	);
};
