import SliderHeader from "./SliderHeader/SliderHeader";
import SliderContent from "./SliderContent/sliderContent"
import styles from "./style.module.css"
import {useEffect, useState} from "react";

function LandingPageSlider(){

    
    return (<>
        <section className={styles.backgroundColor} data-testid="landingPageSliderTesting">
            <div className={styles.aboutSliderHeader}>
                <SliderHeader/>
            </div>
            <div>
                <SliderContent/>
            </div>
        </section>
    </>
    )
}

export default LandingPageSlider;