import "./styles.css";

function WeekItem({ week, handleWeekId }) {
	return (
		<span
			key={week.id}
			className="week-div"
			onClick={() => handleWeekId(week.id, week.topic)}
		>
			<p className="link-week">WEEK {week.id}</p>
			<p className="link-topic">{week.topic}</p>
			<hr />
		</span>

		
	);
}

export default WeekItem;
