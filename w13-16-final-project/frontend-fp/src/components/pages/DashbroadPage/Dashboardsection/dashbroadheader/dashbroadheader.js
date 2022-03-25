import styles from "./dashbroadheader.module.css"


function DashBoardHeader(){
    return(
        <>
            <div className={styles.headerContainer}>
                <h2>Event Schedule</h2>
            </div>
        </>
    )
}

export default DashBoardHeader;