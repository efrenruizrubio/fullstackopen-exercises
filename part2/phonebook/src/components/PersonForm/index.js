export const PersonForm = ({
	submitEvent,
	nameEvent,
	name,
	telephoneEvent,
	telephone,
}) => (
	<form onSubmit={submitEvent}>
		<div>
			name: <input type="text" onChange={nameEvent} value={name} />
		</div>
		<div>
			phone: <input type="tel" onChange={telephoneEvent} value={telephone} />
		</div>
		<div>
			<button type="submit">add</button>
		</div>
	</form>
);
