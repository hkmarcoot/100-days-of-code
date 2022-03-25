import styles from "./style.module.css"

function HeroDescText({dataText}){
    const TextData = dataText
    return(<>
        <div className={styles.heroEventDescriptionText} data-testid="heroEventDescriptionTextTesting">
            <p className={styles.heroEventDescriptionText}>{TextData}</p>
        </div>
    </>)
}

export default HeroDescText;