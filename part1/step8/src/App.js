import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const Button = ({ name, action }) => (
		<button type="button" onClick={action}>
			{name}
		</button>
	);

	const Statistics = ({ good, neutral, bad }) => {
		return (
			<div>
				<h1>statistics</h1>
				<span>good {good}</span>
				<br />
				<span>neutral {neutral}</span>
				<br />
				<span>bad {bad}</span>
				<br />
				<span>all {good + neutral + bad}</span>
				<br />
				<span>average {(good - bad) / (good + neutral + bad)}</span>
				<br />
				<span>positive {(good / (good + neutral + bad)) * 100} %</span>
				<br />
			</div>
		);
	};

	const handleGoodButton = () => {
		setGood((oldValue) => oldValue + 1);
	};
	const handleNeutralButton = () => {
		setNeutral((oldValue) => oldValue + 1);
	};
	const handleBadButton = () => {
		setBad((oldValue) => oldValue + 1);
	};

	return (
		<div>
			<h1>give feedback</h1>
			<Button name={"good"} action={handleGoodButton} />
			<Button name={"neutral"} action={handleNeutralButton} />
			<Button name={"bad"} action={handleBadButton} />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
