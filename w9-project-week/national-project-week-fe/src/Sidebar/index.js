import React from "react";
import WeeksList from "../WeeksList";
import "./styles.css";


function Sidebar({ weeks, handleWeekId, theme }) {
  
  return (
    <div className="sidebar" id="sidebar" data-theme={theme}>
      <WeeksList weeks={weeks} handleWeekId={handleWeekId} />
    </div>
  );
}
export default Sidebar;
