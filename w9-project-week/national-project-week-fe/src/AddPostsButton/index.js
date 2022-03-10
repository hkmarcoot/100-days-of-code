import React from "react";
import "./styles.css";

function AddPostsButton({ handleFormPage, weekId }) {
	return (
		<div className="create-button-div">
			{!weekId ?  <div></div> : <div><button className="create-button" onClick={handleFormPage}>CREATE A POST</button></div> }
			
			{/* {weekId &&  <button className="create-button" onClick={handleFormPage}>CREATE A POST</button>} */}
			{/* {weekId || button ? <button className="create-button" onClick={handleFormPage}>CREATE A POST</button> : <button className="create-button" onClick={handleFormPage}>CLOSE THE FORM</button>} */}
			
			
		</div>
	);
}

export default AddPostsButton;
