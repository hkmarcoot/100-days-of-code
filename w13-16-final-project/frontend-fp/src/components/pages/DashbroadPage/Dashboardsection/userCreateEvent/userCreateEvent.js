import styles from "./userCreateEvent.module.css";
import CreateHeader from "./userCreateHeader/createheader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { API_URL } from "../../../../../config/index.js";
import { useAuthState } from "../../../../Context/index.js";

function UserCreateEvent() {
  const [eventData, setEventData] = useState([]);
  const userDetails = useAuthState();

  // form placeHolder value
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState("");
  const [price, setPrice] = useState("");
  const [editingEventId, setEditingEventId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [externalEvent, setExternalEvent] = useState("");
  const [attendanceId, setAttendanceId] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchEventsData = async () => {
    let res = await fetch(`${API_URL}/events/user/host/${userDetails.id}`);
    const data = await res.json();
    console.log(data);
    setEventData(data);
  };
  useEffect(() => {
    fetchEventsData();
  }, []);

  function onSubmitEditEvent(
    title,
    location,
    date,
    desc,
    image,
    categories,
    price,
    startTime,
    endTime,
    externalEvent,
    editingEventId,
    attendanceId
  ) {
    const templateEditEvent = {
      author_username: userDetails.username,
      title: title,
      image: image,
      location: location,
      description: desc,
      date: date,
      start_time: startTime,
      end_time: endTime,
      price: price,
      categories: categories,
      external_event: externalEvent,
      star_rating: 5,
      attendance_id: attendanceId,
    };

    fetch(`${API_URL}/events/${editingEventId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userDetails.token}`,
      },
      body: JSON.stringify(templateEditEvent),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resourse");
        }
        return res.json();
      })
      .catch((err) => {
        //auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      });
  }

  const handleEditEventForm = async () => {
    if (
      title &&
      location &&
      date &&
      desc &&
      image &&
      categories &&
      price &&
      startTime &&
      endTime &&
      externalEvent &&
      editingEventId &&
      attendanceId
    ) {
      //fetch edit event here
      onSubmitEditEvent(
        title,
        location,
        date,
        desc,
        image,
        categories,
        price,
        startTime,
        endTime,
        externalEvent,
        editingEventId,
        attendanceId
      );
      //-----------------------------//
      console.log("Edited your event");
      populateClearForm();
    }
  };

  //when click edit button lets populate the button
  function populateEditForm(input) {
    setTitle(input.title);
    setLocation(input.location);
    setDate(input.date);
    setDesc(input.description);
    setImage(input.image);
    setCategories(input.categories);
    setPrice(input.price);
    setEditingEventId(input._id);
    setStartTime(input.start_time);
    setEndTime(input.end_time);
    setExternalEvent(input.external_event);
    setAttendanceId(input.attendance_id);
  }

  function populateClearForm() {
    setTitle("");
    setLocation("");
    setDate("");
    setDesc("");
    setImage("");
    setCategories("");
    setPrice("");
    setEditingEventId("");
    setStartTime("");
    setEndTime("");
    setExternalEvent("");
    setAttendanceId([]);
  }

  //delete function is not yet been implemented
  const handleDeleteData = async (input) => {
    console.log("Event ID Here");
    console.log(input._id);

    onDeleteData(input._id);

    console.log("delete this event");
    //setEditingEventId("");
    fetchEventsData();
  };

  function onDeleteData(editingEventId) {
    fetch(`${API_URL}/events/${editingEventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userDetails.token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resourse");
        }
        return res.json();
      })
      .catch((err) => {
        //auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      });
  }

  //   function getDeleteEventInfo(input) {
  //     //setEditingEventId(input._id);
  //     console.log("Checking again :");
  //     console.log(input._id);
  //   }

  return (
    <>
      <div className={styles.UserContainerEvent}>
        <div className={styles.userCreateContainer}>
          {/* This is for event you host section */}
          <CreateHeader Title={"Event You Host"} />
          <div className={styles.tileMain}>
            {/* This is for tile its here because we need to be able to transfer data from button click edit to populate the form */}
            {eventData.map((input) => {
              return (
                <div className={styles.tileContainer} key={input.id}>
                  <div className={styles.tileContainerMain}>
                    <p className={styles.tileTitleNDate}>{input.title}</p>
                    <p className={styles.tileTitleNDate}>{input.date}</p>
                    <p className={styles.tileNumberGoing}>{input.id}</p>
                    <div className={styles.buttonContainer}>
                      <button
                        className={styles.buttonStyle}
                        onClick={() => {
                          populateEditForm(input);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faPencil}
                          className={styles.editBtn}
                        />
                      </button>
                      <button
                        className={styles.buttonStyle}
                        onClick={() => {
                          //   getDeleteEventInfo(input);
                          handleDeleteData(input);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faXmark}
                          className={styles.deleteBtn}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* This is end of event you host section */}
          <CreateHeader Title={"Edit Your Event"} />
          {/*  form  */}
          <div className={styles.formContainer}>
            <form className={styles.formStyle}>
              <div className={styles.formStyleDateNLocation}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Location"
                  required
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                />

                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Date"
                  required
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Start Time"
                required
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="End Time"
                required
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Description"
                required
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="image"
                required
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="category"
                required
                onChange={(e) => setCategories(e.target.value)}
                value={categories}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="External Event"
                required
                onChange={(e) => setExternalEvent(e.target.value)}
                value={externalEvent}
              />

              <div className={styles.formStylePriceNSubmit}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Price"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />

                <input
                  type="button"
                  value="Submit"
                  className={styles.formSubmitBtn}
                  onClick={() => handleEditEventForm()}
                />

                <input
                  type="button"
                  className={styles.formClearBtn}
                  value="Clear"
                  onClick={(e) => {
                    populateClearForm();
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCreateEvent;
