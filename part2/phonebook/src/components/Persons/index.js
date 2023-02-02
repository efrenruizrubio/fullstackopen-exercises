import { Person } from "../index";

export const Persons = ({ persons, filter }) => (
	<div>
		{persons
			.filter((person) => {
				return person.name.toLowerCase().startsWith(filter);
			})
			.map((person) => (
				<Person
					key={person.name}
					name={person.name}
					phoneNumber={person.phoneNumber}
				/>
			))}
	</div>
);
