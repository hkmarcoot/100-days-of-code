import styles from "./style.module.css"

function Heroeventtitledesc(){
    return (<>
        <div className={styles.heroeventtitledesc} data-testid="heroeventtitledesctesting">
            <p className={styles.fontStyle}>
                Description
            </p>
        </div>
    </>)
}

export default Heroeventtitledesc;