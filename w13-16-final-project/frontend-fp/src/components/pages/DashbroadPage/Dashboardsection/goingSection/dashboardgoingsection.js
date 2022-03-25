import styles from "./dashbroadgoingsection.module.css"
import DashboardGoingSectionTile from "./DashboardgoingSectiontile/dashboardgoingsection.js";
function Dashboardgoingsection(){
    return(<>
        <div className={styles.dashboardgoingsection}>
            <DashboardGoingSectionTile/>
        </div>
    </>)
}

export default Dashboardgoingsection;