import styles from "./mainEvent.module.css";
import {Link} from "react-router-dom";
import { InputGroup } from "react-bootstrap";

export default function MainEventsSection({indexLastEvent, indexFirstEvent, currentEvent, eventData}) {

const eventsToRender = eventData.slice(indexFirstEvent, indexLastEvent);
    return (
        <section id="mainEventsSection" className={styles.mainEventsSection}>
       
            {eventsToRender.map((input, index) => {
                return (
                  <section key={index} id={index}>
                    <Link
                      to="/event"
                      className={styles.linkstyle}
                      state={{ input: { input } }}
                    >
                
                      <section className={styles.tileContainer}>
                        <div className={styles.tile}>
                          <img
                            className={styles.imgContainer}
                            src={input.image}
                            alt={input.title}
                          />

                          <p className={styles.title}>{input.title}</p>
                          <p className={styles.countryTitle}>
                            {input.location}
                          </p>

                          <div className={styles.ratingNDateContainer}>
                            <p className={styles.tileDate}>{input.date}</p>
                          </div>

                          <div className={styles.paragraphContainer}>
                            <p className={styles.paragraphDesc}>
                              {input.description}
                            </p>
                          </div>
                        </div>
                      </section>
                    </Link>
                  </section>
                );
            })}
        </section>
    )
}