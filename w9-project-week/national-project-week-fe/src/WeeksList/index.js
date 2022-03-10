import WeekItem from "../WeekItem";
import './styles.css';

function WeeksList({ weeks, handleWeekId }) {
	return (
		<div className='week-list'>
			{weeks.map((week) => (
				<WeekItem week={week} handleWeekId={handleWeekId} />
			))}
		</div>
	);
}

export default WeeksList;
