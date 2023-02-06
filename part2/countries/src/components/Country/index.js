import { useEffect, useState } from "react";
import { weatherService } from "../../services/weather.js";

export const Country = ({ country }) => {
	const [climateData, setClimateData] = useState(undefined);
	const lat = country.latlng[0];
	const lng = country.latlng[1];

	useEffect(() => {
		weatherService
			.getAll(lat, lng)
			.then((response) => {
				const { main, weather, wind } = response.data;
				setClimateData({ main, weather: weather[0], wind });
			})
			.catch((err) => console.error(err));
	}, [lat, lng]);

	return (
		<div>
			<h2>{country.name.common}</h2>
			<div>capital {country.capital}</div>
			<div>area {country.area}</div>
			<h3>languages: </h3>
			<ul>
				{Object.values(country.languages).map((language, i) => (
					<li key={country.cca3 + (i + 1)}>{language}</li>
				))}
			</ul>
			<img src={country.flags.png} alt={country.flags.alt} />
			{climateData && (
				<>
					<h2>Weather in {country.name.common}</h2>
					<p>
						temperature {(climateData.main.temp - 273.15).toFixed(2)} Celcius
					</p>
					<img
						src={`http://openweathermap.org/img/wn/${climateData.weather.icon}@2x.png`}
						alt={climateData.weather.description}
					/>
					<p>wind {climateData.wind.speed} m/s</p>
				</>
			)}
		</div>
	);
};
