const App = () => {
	const Header = ({ course }) => <h1>{course}</h1>;
	const Content = ({
		part1,
		part2,
		part3,
		exercises1,
		exercises2,
		exercises3,
	}) => (
		<>
			<Part part={part1} exercises={exercises1} />
			<Part part={part2} exercises={exercises2} />
			<Part part={part3} exercises={exercises3} />
		</>
	);

	const Part = ({ part, exercises }) => (
		<p>
			{part} {exercises}
		</p>
	);

	const Total = ({ number }) => <p>Number of exercises {number}</p>;

	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	/* const content = [
		{
			part: "Fundamentals of React",
			exercises: 10,
		},
		{
			part: "Using props to pass data",
			exercises: 7,
		},
		{
			part: "State of a component",
			exercises: 14,
		},
	]; */

	return (
		<div>
			<Header course={course} />
			<Content
				part1={part1}
				part2={part2}
				part3={part3}
				exercises1={exercises1}
				exercises2={exercises2}
				exercises3={exercises3}
			/>
			<Total number={exercises1 + exercises2 + exercises3} />

			{/* {content &&
				content.map((c) => (
					<Content part={c.part} exercise={c.exercises} key={c.part} />
				))} */}

			{/* <Total
				number={content.map((c) => c.exercises).reduce((a, b) => a + b, 0)}
			/> */}
		</div>
	);
};

export default App;
