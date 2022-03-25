import styles from "./heroeventimage.module.css"

function HeroEventImage({dataimg}){
    const imgFromData = dataimg;
    
    return (<>
        <div className={styles.HeroEventImage} data-testid="heroEventImageTesting">
            <img className={styles.img} src={imgFromData} alt="image of event location" />
        </div>
    </>)
}

export default HeroEventImage;