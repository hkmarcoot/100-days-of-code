import styles from "./attendingEventCounterUser.module.css";

function AttendingEventCounterUser({ noAttending }) {
  const numAttending = noAttending;

  return (
    <>
      <div
        className={styles.attendingEventCounter}
        data-testid="attendingEventCounterUserTesting"
      >
        <p className={styles.attendingTitle}>Attending</p>
        <p className={styles.attendingNumber}>{numAttending}</p>
      </div>
    </>
  );
}

export default AttendingEventCounterUser;
