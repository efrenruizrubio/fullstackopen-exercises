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
		const all = good + neutral + bad;
		const average = (good - bad) / (good + neutral + bad);
		const positive = (good / (good + neutral + bad)) * 100;
		return (
			<div>
				<h1>statistics</h1>
				<StatisticsLine text="good" value={good} />
				<StatisticsLine text="neutral" value={neutral} />
				<StatisticsLine text="bad" value={bad} />
				<StatisticsLine text="all" value={all} />
				<StatisticsLine text="average" value={average < 0 ? 0 : average} />
				<StatisticsLine text="positive" value={positive} />
			</div>
		);
	};

	const StatisticsLine = ({ text, value }) => {
		return (
			<>
				<span>
					{text} {value} {text === "positive" ? "%" : null}
				</span>
				<br />
			</>
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
			<Button name="good" action={handleGoodButton} />
			<Button name="neutral" action={handleNeutralButton} />
			<Button name="bad" action={handleBadButton} />
			{good || neutral || bad ? (
				<Statistics good={good} neutral={neutral} bad={bad} />
			) : (
				<p>No feedback given</p>
			)}
		</div>
	);
};

export default App;
