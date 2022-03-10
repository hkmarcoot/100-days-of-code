import React, { useState } from "react";
import "./styles.css";

function Inputs({ onSubmit, setShowModal }) {
	const [language, setLanguage] = useState("");
	const [link, setLink] = useState("");
	const [summary, setSummary] = useState("");

	function handleLanguages(event) {
		const topic = event.target.value;
		setLanguage(topic);
	}
	function handleLink(event) {
		const link = event.target.value;
		setLink(link);
	}
	function handleSummary(event) {
		const summary = event.target.value;
		setSummary(summary);
	}

	const handleForm = () => {
		if(summary && link) {
			onSubmit(language, link, summary, setLanguage, setLink, setSummary);
			setShowModal(false);
		}
	}

	return (
		<div className="form">
			<label className='requiredLabel'>  * Required</label>
			<textarea
				className="form-textarea form-input"
				type="text"
				onChange={handleSummary}
				placeholder="Enter a short description of your bookmark"
				value={summary}
				maxLength="75"
			/>
			
			<label className='requiredLabel'> * Required</label>
			<input
				className="form-input"
				type="text"
				placeholder="Enter a URL"
				onChange={handleLink}
				value={link}
			/>
			<label className='requiredLabel'></label>
			
			<input
				className="form-input"
				type="text"
				onChange={handleLanguages}
				placeholder="Add a tag"
				value={language}
			/>
			<br />
			<button
				className="form-submit-button"
				onClick={() =>
					handleForm()
				}
			>
				SUBMIT
			</button>
		</div>
	);
}

export default Inputs;
