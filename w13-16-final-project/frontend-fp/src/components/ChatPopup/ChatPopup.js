import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./ChatPopup.module.css";
import { useAuthState } from "../Context/index.js";



function JoinChatButton({ onMessageSubmit, onTextChange, renderChat, chatUser }) {
  const userDetails = useAuthState();

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function openChat() {
    document.getElementById("myChat").style.display = "block";
  }

  function closeChat() {
    document.getElementById("myChat").style.display = "none";
  }
 
  if (userDetails.username) {
  return (
 
    <section id="chat-container" className={styles["chat-container"]}>

    <div className={styles.chatSection} id="myChat">
    <h2 className={styles.chatTitle}>Chat</h2>
    <div className={styles.chatWrapper} >
      {renderChat(styles)}
      </div>
      <button type="button" className={styles.cancelButton} onClick={closeChat}>Close</button>
    </div>
    <button className={styles["openChatSection-button"]} onClick={openChat}>Chat</button>


      <button className={styles["open-button"]} onClick={openForm}>Send a message</button>
      <div className={styles["chat-popup"]} id="myForm">

        <form onSubmit={onMessageSubmit} className={styles["form-container"]}>

          <div className="name-field">
          <label htmlFor="name"><b>Name</b></label>
					<input type="text" name="name" onChange={(e) => onTextChange(e)} value={chatUser.name} placeholder="Enter your name" className={styles.nameInput} label="Name" />
				</div>
          <label htmlFor="msg"><b>Message</b></label>
          <textarea placeholder="Type message..." name="message" onChange={(e) => onTextChange(e)} value={chatUser.message} label="Message" required></textarea>

          <button className={styles.btn}>Send</button>
          <button type="button" className={styles.cancelButton} onClick={closeForm}>Close</button>
        </form>

      </div>

    </section>
    
  );
  } else {
    return (
 
      <section id="chat-container" className={styles["chat-container"]}>
  
      <div className={styles.chatSection} id="myChat">
      <h2 className={styles.chatTitle}>Chat</h2>
      <div className={styles.chatWrapper} >
        {/* {renderChat(styles)} */}
        <h4 id="disabled" className={styles.disabledArea}>Register or login to access the chat.</h4>
        </div>
        <button type="button" className={styles.cancelButton} onClick={closeChat}>Close</button>
      </div>
      <button className={styles["openChatSection-button"]} onClick={openChat}>Chat</button>
  
  
        <button className={styles["open-button"]} onClick={openForm}>Send a message</button>
        <div className={styles["chat-popup"]} id="myForm">
  
          <form onSubmit={onMessageSubmit} className={styles["form-container"]}>
  
            <div className="name-field">
            <label htmlFor="name"><b>Name</b></label>
            <input type="text" name="name" disabled="true" onChange={(e) => onTextChange(e)} value={chatUser.name}  className={styles.nameInput} label="Name" />
          </div>
            <label htmlFor="msg"><b>Message</b></label>
            <textarea  disabled="true" placeholder="Register or login to access the chat." name="message" onChange={(e) => onTextChange(e)} value={chatUser.message} label="Message" required></textarea>
  
            <button className={styles.btn}>Send</button>
            <button type="button" className={styles.cancelButton} onClick={closeForm}>Close</button>
          </form>
  
        </div>
  
      </section>
      
    );
  }
}

export default JoinChatButton;
