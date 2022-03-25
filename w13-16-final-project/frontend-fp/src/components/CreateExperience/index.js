import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./createExperience.module.css";
import { API_URL } from "../../config";
import { useAuthState } from "../Context/index.js";

//  function CreateExperience() {
//    return (
//      <div className={styles.container}>

//          <div className={styles.leftImage}>
//              <img src="https:images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80" alt="people" className={styles.formImage}></img>
//          </div>

//          <div className={styles.rightForm}>
//              <div className={styles.mainContainer}>

//             <div className={styles.card}>
//             <h2>Create Your Xpeerience!</h2>
//                 <fieldset>
//                   <div class="mt-3 inputbox" className={styles.inputbox}>
//                   <input type="url" class="form-control" className={styles.form} name="" placeholder="Add image here"></input>
//                     <input type="text" class="form-control" className={styles.form} name="" placeholder="Title"></input>
//                     <div class= "locaton-date-flex" className={styles.locationDateFlex}>
//                       <div>
//                         <input type="text" class="form-control" className={styles.formLocation} name="" placeholder="Location"></input>
//                         </div>
//                       <div>
//                         <input type="text" class="form-control" className={styles.form} name="" placeholder="Date / Time"></input>
//                       </div>
//                     </div>
//                     <input type="text" class="form-control" className={styles.form} name="" placeholder="Description"></input>
//                     <input type="text" class="form-control" className={styles.form} name="" placeholder="price"></input>
//                     <div className="mt-2"> <button class="btn btn-primary btn-block" className={styles.button}>submit</button> </div>
//                   </div>

function CreateExperience() {
  const userDetails = useAuthState();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [categories, setCategories] = useState("");
  const [externalEvent, setExternalEvent] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  function handleImage(event) {
    const image = event.target.value;
    setImage(image);
  }

  function handleTitle(event) {
    const title = event.target.value;
    setTitle(title);
  }

  function handleLocation(event) {
    const location = event.target.value;
    setLocation(location);
  }

  function handleDate(event) {
    const date = event.target.value;
    setDate(date);
  }

  function handleStartTime(event) {
    const startTime = event.target.value;
    setStartTime(startTime);
  }

  function handleEndTime(event) {
    const endTime = event.target.value;
    setEndTime(endTime);
  }

  function handleDescription(event) {
    const description = event.target.value;
    setDescription(description);
  }

  function handlePrice(event) {
    const price = event.target.value;
    setPrice(price);
  }

  function handleCategories(event) {
    const categories = event.target.value;
    setCategories(categories);
  }

  function handleExternalEvent(event) {
    const externalEvent = event.target.value;
    setExternalEvent(externalEvent);
  }

  function onSubmitEvent(
    image,
    title,
    location,
    date,
    description,
    startTime,
    endTime,
    price,
    categories,
    externalEvent
  ) {
    const templateEvent = {
      author_username: userDetails.username,
      image: image,
      title: title,
      location: location,
      description: description,
      date: date,
      start_time: startTime,
      end_time: endTime,
      price: price,
      categories: categories,
      external_event: externalEvent,
      star_rating: 5,
    };

    fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userDetails.token}`,
      },
      body: JSON.stringify(templateEvent),
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

    setImage("");
    setLocation("");
    setDescription("");
    setCategories("");
    setDate("");
    setStartTime("");
    setEndTime("");
    setTitle("");
    setPrice(0);
    setExternalEvent("");
  }

  const handleEventForm = async () => {
    if (
      image &&
      title &&
      location &&
      date &&
      description &&
      startTime &&
      endTime &&
      price &&
      categories &&
      externalEvent
    ) {
      //fetch create event here
      onSubmitEvent(
        image,
        title,
        location,
        date,
        description,
        startTime,
        endTime,
        price,
        categories,
        externalEvent
      );
      //----------------------------//
      console.log("Created a new event");
    }
  };

  return (
    <div className={styles.container}>
    
      <div className={styles.leftImage}>
        <img
          src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="people"
          className={styles.formImage}
        ></img>
      </div>

      <div className={styles.rightForm}>
        <div className={styles.mainContainer}>
          <div className={styles.card}>
            {userDetails.username ? (
              <>
                <h2>Create Your Xpeerience, {userDetails.username}!</h2>
                <fieldset>
                  <div class="mt-3 inputbox" className={styles.inputbox}>
                    <input
                      type="url"
                      class="form-control"
                      className={styles.form}
                      name=""
                      placeholder="Add image here"
                      onChange={handleImage}
                      value={image}
                    ></input>
                    <input
                      type="text"
                      class="form-control"
                      className={styles.form}
                      name=""
                      placeholder="Title"
                      onChange={handleTitle}
                      value={title}
                    ></input>
                    <div
                      class="locaton-date-flex"
                      className={styles.locationDateFlex}
                    >
                      <div>
                        <input
                          type="text"
                          class="form-control"
                          className={styles.formLocation}
                          name=""
                          placeholder="Location"
                          onChange={handleLocation}
                          value={location}
                        ></input>
                      </div>
                      <div>
                        <input
                          type="text"
                          class="form-control"
                          className={styles.formDate}
                          name=""
                          placeholder="Date"
                          onChange={handleDate}
                          value={date}
                        ></input>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      className={styles.form}
                      name=""
                      placeholder="Start Time"
                      onChange={handleStartTime}
                      value={startTime}
                    ></input>
                    <input
                      type="text"
                      class="form-control"
                      className={styles.form}
                      name=""
                      placeholder="End Time"
                      onChange={handleEndTime}
                      value={endTime}
                    ></input>
                    <input
                      type="text"
                      class="form-control"
                      className={styles.form}
                      name=""
                      placeholder="Description"
                      onChange={handleDescription}
                      value={description}
                    ></input>
                    <input
                      type="text"
                      class="form-control"
                      className={styles.form}
                      name=""
                      placeholder="Price"
                      onChange={handlePrice}
                      value={price}
                    ></input>
                    <input
                      type="text"
                      class="form-control"
                      className={styles.form}
                      name=""
                      placeholder="Categories"
                      onChange={handleCategories}
                      value={categories}
                    ></input>
                    <input
                      type="text"
                      class="form-control"
                      className={styles.form}
                      name=""
                      placeholder="External event"
                      onChange={handleExternalEvent}
                      value={externalEvent}
                    ></input>
                    <div className="mt-2">
                      {" "}
                      <button
                        class="btn btn-primary btn-block"
                        className={styles.button}
                        onClick={() => handleEventForm()}
                      >
                        submit
                      </button>{" "}
                    </div>
                  </div>
                </fieldset>
              </>
            ) : (
              <h2>Login to create your Xpeerience!</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateExperience;
