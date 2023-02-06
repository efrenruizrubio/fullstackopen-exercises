import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

const getAll = (lat, lng) => {
	return axios.get(
		`${baseUrl}lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`,
	);
};

export const weatherService = {
	getAll,
};
