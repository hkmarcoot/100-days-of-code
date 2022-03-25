import styles from "./attendingEventJoinUser.module.css";
import { useState } from "react";
import { useAuthState } from "../../../../Context/index";

function AttendingEventJoinUser({
  // setShowModal,
  dataAttend,
  setDummyNum,
  setDummyNumCounter,
  setDummyNumCounterNo,
}) {
  const [attendStatus, setAttendStatus] = useState("Attend Event");
  const [going, setGoing] = useState(0);
  const eventID = dataAttend._id;
  const userIDAuth = useAuthState();

  async function AttendSubmit(e) {
    e.preventDefault();
    if (going === 0) {
      try {
        await fetch(`https://xpeerience.herokuapp.com/events/join/${eventID}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            user_id: userIDAuth.id,
          }),
        });

        setAttendStatus("Going");
        setGoing(going + 1);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await fetch(`https://xpeerience.herokuapp.com/events/quit/${eventID}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            user_id: userIDAuth.id,
          }),
        });

        setAttendStatus("Attend Event");
        setGoing(going - 1);
      } catch (err) {
        console.log(err);
      }
    }

    setDummyNum(1);
    setDummyNumCounter(1);
    setDummyNumCounterNo(1);
  }

  // useEffect(()=>{
  //     dummyNum
  // },[])

  // function attendingStatus(){

  //     if(attendStatus === "Attend Event"){
  //         setAttendStatus("Going")
  //         setGoing(going+1)
  //     } else{
  //         setAttendStatus("Attend Event")
  //         setGoing(going-1)
  //     }
  // }

  return (
    <>
      {userIDAuth.username ? (
        <button
          onClick={AttendSubmit}
          className={styles.attendingEventJoin}
          data-testid="AttendingEventJointUserTesting"
        >
          {attendStatus}
        </button>
      ) : (
        <button
          // onClick={() => setShowModal(true)}
          className={styles.attendingEventJoin}
          data-testid="AttendingEventJointUserTesting"
          disabled
        >
          Login To Join
        </button>
      )}
    </>
  );
}

export default AttendingEventJoinUser;
