const Header = ({ course }) => <h1>{course}</h1>;
const Content = ({ parts }) => {
	return (
		parts &&
		parts.map((part, i) => (
			<Part part={part.name} exercises={part.exercises} key={i} />
		))
	);
};

const Part = ({ part, exercises }) => (
	<p>
		{part} {exercises}
	</p>
);

const Total = ({ total }) => <strong>total of {total} exercises</strong>;

export const Course = ({ courses }) => {
	return courses.map((course) => {
		const total = course.parts.reduce((a, b) => a + b.exercises, 0);
		return (
			<div key={course.id}>
				<Header course={course.name} />
				<Content parts={course.parts} />
				<Total total={total} />
			</div>
		);
	});
};
