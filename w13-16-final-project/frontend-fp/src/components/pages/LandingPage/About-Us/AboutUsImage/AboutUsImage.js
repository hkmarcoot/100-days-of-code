import image from "../AboutUsImage/imageStore/aboutUs.png"
import styles from "./style.module.css";
function AboutUsImage() {

  return (
    <>
   <img src={image} className={styles.imgContainer}alt="piture of group" data-testid="aboutUsImagetesting"/>
    </>
  );
}

export default AboutUsImage;