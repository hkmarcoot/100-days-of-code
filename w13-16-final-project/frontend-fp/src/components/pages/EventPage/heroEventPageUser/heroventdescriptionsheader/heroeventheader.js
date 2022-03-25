import styles from "./style.module.css"

function HeroEventDecriptionHeader({dataheader}){
    const heading=dataheader;

    return (<>
        <div className={styles.header} data-testid="heroeventdescriptionheadertesting">
            <p className={styles.heroEventDescriptionHeader}>{heading}</p>
        </div>
    </>)
}

export default HeroEventDecriptionHeader;