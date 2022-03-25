import HeroEventImage from "./heroeventimage/heroeventimage";
import styles from "./style.module.css"
import HeroEventDecriptionHeader from "./heroventdescriptionsheader/heroeventheader";
import Heroeventtitledesc from "./heroeventtitledesc/heroeventtitledesc";
import HeroDescText from "./herodescriptionstext/herodesctext";



function HeroEventUser({DataToRender}){
    const dataToUse =DataToRender
  
    return(
        <div className={styles.heroContainer} data-testid="heroContainerTesting">
            <div className={styles.heroMainContainer}>
                <HeroEventImage dataimg={dataToUse.image}/>
                <HeroEventDecriptionHeader dataheader={dataToUse.title}/>

                <div className={styles.heroEventDescriptionSection}>
                    <Heroeventtitledesc/>
                    <HeroDescText dataText={dataToUse.description}/>
                </div>
            </div>
        </div>
    )
}

export default HeroEventUser;