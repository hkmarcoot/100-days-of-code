import AttendingEventCounterUser from "./CounterUser/attendingEventCounterUser";
import styles from "./AttendingEventPageUser.module.css"
import AttendingEventJoinUser from "./JoinUser/attendingEventJoinUser"
import AttendingEventPriceUser from "./PriceUser/attendingEventPriceuser";



function AttendingEventPageUser({
  DataToRender,
  setDummyNum,
  setDummyNumCounter,
  noAttending,
  setDummyNumCounterNo,
  dummyNumCounterNo,
  
}) {
  const data = DataToRender;

  // console.log(setNum)
  return (
    <>
      <div
        className={styles.attendingSectionContainer}
        data-testid="attenidngSectionContainer"
      >
        <div className={styles.attendingSectionMainContainer}>
          <AttendingEventCounterUser
            noAttending={noAttending}
            dummyNumCounterNo={dummyNumCounterNo}
          />
          <div className={styles.attendingGoingSection}>
            <AttendingEventPriceUser dataprice={data.price} />
            <AttendingEventJoinUser
              dataAttend={data}
              setDummyNum={setDummyNum}
              setDummyNumCounter={setDummyNumCounter}
              setDummyNumCounterNo={setDummyNumCounterNo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendingEventPageUser;