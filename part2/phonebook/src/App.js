import { personService } from "./services/persons.js";
import { useState, useEffect } from "react";
import { Filter, PersonForm, Persons, Notification } from "./components/index";

const App = () => {
	const [newName, setNewName] = useState("");
	const [newPhoneNumber, setNewPhoneNumber] = useState("");
	const [filter, setFilter] = useState("");
	const [persons, setPersons] = useState([]);
	const [notification, setNotification] = useState({});

	const handleFilter = (event) => {
		setFilter(event.target.value.toLowerCase());
	};

	const handleName = (event) => {
		setNewName(event.target.value);
	};

	const handleTelephone = (event) => {
		setNewPhoneNumber(event.target.value);
	};

	const handleNotification = ({ code, message }) => {
		setNotification({ code, message });
		setTimeout(() => setNotification({ code: "", message: "" }), 5000);
	};

	const handleDelete = (id) => {
		const person = persons.find((person) => person.id === id);
		if (window.confirm(`Delete ${person.name}?`)) {
			personService
				.deletePerson(id)
				.then((response) => {
					handleNotification({
						code: response.status,
						message: `${person.name} has been deleted from the phonebook.`,
					});
					setPersons((prev) => prev.filter((person) => person.id !== id));
				})
				.catch((error) => {
					handleNotification({
						code: error.response.status,
						message: `${person.name} has been already deleted from the phonebook.`,
					});
				});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const person = persons.find((person) => person.name === newName);
		if (!person) {
			if (newPhoneNumber) {
				let newPerson = {
					name: newName,
					number: newPhoneNumber,
				};
				personService
					.create(newPerson)
					.then((response) => {
						handleNotification({
							code: response.status,
							message: `Added ${newName}`,
						});
						setPersons([...persons, response.data]);
					})
					.catch((err) =>
						handleNotification({
							code: err.response.status,
							message:
								"An error has ocurred when trying to add a new person, try again later.",
						}),
					);
				setNewName("");
				setNewPhoneNumber("");
			} else {
				alert(
					`To add ${newName} to the phonebook, the phone number can't be empty`,
				);
			}
		} else if (newPhoneNumber && newPhoneNumber !== person.number) {
			if (
				window.confirm(
					`${person.name} is already added to phonebook, replace the old number with a new one?`,
				)
			) {
				const updatedPerson = { ...person, number: newPhoneNumber };
				personService
					.update(person.id, updatedPerson)
					.then((response) => {
						handleNotification({
							code: response.status,
							message: `${person.name}'s number has been updated`,
						});
						const updatedPersons = persons.map((p) =>
							p.id !== person.id ? p : response.data,
						);
						setPersons(updatedPersons);
					})
					.catch((error) =>
						handleNotification({
							code: error.response.status,
							message: `${person.name}'s directory couldn't be updated, try again later.`,
						}),
					);
			}
		} else {
			alert(`${newName} is already added to phonebook`);
		}
	};

	useEffect(() => {
		personService
			.getAll()
			.then((response) => {
				setPersons(response.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification notification={notification} />
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
			<Persons persons={persons} filter={filter} handleDelete={handleDelete} />
		</div>
	);
};

export default App;
