import { useState } from "react";
import { Filter, PersonForm, Persons } from "./components/index";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);

	const [newName, setNewName] = useState("");
	const [newPhoneNumber, setNewPhoneNumber] = useState("");
	const [filter, setFilter] = useState("");

	const handleFilter = (event) => {
		setFilter(event.target.value.toLowerCase());
	};

	const handleName = (event) => {
		setNewName(event.target.value);
	};

	const handleTelephone = (event) => {
		setNewPhoneNumber(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!persons.find((person) => person.name === newName)) {
			if (newPhoneNumber) {
				const newPerson = {
					name: newName,
					phoneNumber: newPhoneNumber,
				};
				setPersons([...persons, newPerson]);
				setNewName("");
				setNewPhoneNumber("");
			} else {
				alert(
					`To add ${newName} to the phonebook, the phone number can't be empty`,
				);
			}
		} else {
			alert(`${newName} is already added to phonebook`);
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter event={handleFilter} />
			<h3>Add a new</h3>
			<PersonForm
				submitEvent={handleSubmit}
				nameEvent={handleName}
				name={newName}
				telephoneEvent={handleTelephone}
				telephone={newPhoneNumber}
			/>
			<h3>Numbers</h3>
			<Persons persons={persons} filter={filter} />
		</div>
	);
};

export default App;
