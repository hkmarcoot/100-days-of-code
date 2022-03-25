import AboutHeader from "./AboutUsHeader/AboutHeader";
import AboutUsImage from "./AboutUsImage/AboutUsImage";
import AboutText from "./AboutUsText/AboutUsText";
import styles from "./styles.module.css";
function Aboutus() {
  return (
    <>
      <section
        data-testid="aboutUsSectiontesting"
        className={styles.backgroundAboutUsContainer}
        id={"about-us-section"}
      >
        <div className={styles.aboutUsHeader}>
          <AboutHeader />
        </div>
        <div className={styles.aboutUsContainer}>
          <div className={styles.aboutUsMainContainer}>
            <AboutText />
            <AboutUsImage />
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
