import { Country, CountryButton } from "../index";

export const Countries = ({ countries }) => {
	return (
		<div>
			{countries && countries.length < 11 ? (
				countries.map((country) => (
					<div key={country.name.official}>
						{country.name.common}
						{countries.length === 1 ? (
							<Country country={country} />
						) : (
							<CountryButton country={country} />
						)}
					</div>
				))
			) : (
				<div>Too many matches, specify another filter</div>
			)}
		</div>
	);
};
