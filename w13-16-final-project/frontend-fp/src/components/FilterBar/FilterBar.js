import React from "react";
import styles from "./FilterBar.module.css";

function FilterBar () {

    return (
        <div className={styles.FilterBarContainer}>
            <div className={styles.FilterBarHeadingsContainer}>
                <h5 className={styles.FilterBarHeadings}>
                    All
                </h5>
                <h5 className={styles.FilterBarHeadings}>
                    Location
                </h5>
                <h5 className={styles.FilterBarHeadings}>
                    Today
                </h5>
                <h5 className={styles.FilterBarHeadings}>
                    This Weekend
                </h5>
                <h5 className={styles.FilterBarHeadings}>
                    My Events
                </h5>
            </div>
        </div>


    )
}











export default FilterBar;