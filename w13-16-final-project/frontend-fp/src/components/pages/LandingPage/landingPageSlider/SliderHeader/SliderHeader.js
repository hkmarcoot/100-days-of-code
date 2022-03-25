import styles from "./style.module.css"
function SliderHeader(){
    return(<>
        <h1 className={styles.headerSlider} data-testid='aboutSliderHeaderTesting'>
            <span className={styles.header_UsSlider}>Worldwide</span> events that are waiting for you
        </h1>
    </>)
}

export default SliderHeader;