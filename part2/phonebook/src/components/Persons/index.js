import { Person } from "../index";

export const Persons = ({ persons, filter, handleDelete }) => (
	<div>
		{persons
			.filter((person) => {
				return person.name.toLowerCase().startsWith(filter);
			})
			.map((person) => (
				<Person key={person.name} person={person} handleDelete={handleDelete} />
			))}
	</div>
);
