import { countriesService } from "./services/countries.js";
import { useState, useEffect } from "react";
import { Filter, Countries } from "./components/index.js";

const App = () => {
	const [filter, setFilter] = useState("");
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		countriesService
			.getAll()
			.then((response) => setCountries(response.data))
			.catch((err) => console.error(err));
	}, []);

	const handleFilter = (e) => {
		setFilter(e.target.value.toLowerCase());
	};

	const filteredArray = countries.filter((country) =>
		country.name.common.toLowerCase().includes(filter),
	);

	return (
		<div>
			<Filter event={handleFilter} />
			{filter && <Countries countries={filteredArray} />}
		</div>
	);
};

export default App;
