import { useState } from "react";
import { Country } from "../index";

export const CountryButton = ({ country }) => {
	const [showCountry, setShowCountry] = useState();
	const handleClick = () => {
		setShowCountry(!showCountry);
	};

	return (
		<>
			<button type="button" onClick={handleClick}>
				show {showCountry ? "less" : null}
			</button>
			{showCountry && <Country country={country} />}
		</>
	);
};
