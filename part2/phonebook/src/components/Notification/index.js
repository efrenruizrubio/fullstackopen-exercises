import "./notification.css";

export const Notification = ({ notification }) => {
	if (notification.message) {
		const { code, message } = notification;
		return (
			<div className={`notification ${code < 400 ? "success" : "error"}`}>
				<h2>{message}</h2>
			</div>
		);
	}
	return null;
};
