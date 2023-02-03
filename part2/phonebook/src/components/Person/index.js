export const Person = ({ person, handleDelete }) => {
	const { name, number, id } = person;
	return (
		<>
			<p>
				{name} {number}{" "}
				<button type="button" onClick={() => handleDelete(id)}>
					delete
				</button>
			</p>
		</>
	);
};
