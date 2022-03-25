import styles from './style.module.css';

function AboutText(){

    return (<>
        <p className={styles.textHolder} data-testid="textHolder-testing">
            Our mission is to bring everyone together and explore the city and do the things you always wanted to do with your friends. Our team, with 6 SOC bootcampers, tries to accomplish this impossible challenge and brings you all the one-stop solution.
        </p>
    </>)
}

export default AboutText;