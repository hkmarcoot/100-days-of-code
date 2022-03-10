import React, { useState } from "react";
import "./styles.css";

function EditInputs({ editPost, onEditSubmit, setShowEditModal }) {
	const [language, setLanguage] = useState(editPost[0].tags);
	const [link, setLink] = useState(editPost[0].link);
	const [summary, setSummary] = useState(editPost[0].summary);
    const postId = editPost[0].id;

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

	const handleEditForm = () => {
		if(summary && link) {
			onEditSubmit(postId, language, link, summary);
			setShowEditModal(false);
		}
	}

    console.log(editPost[0].summary);
	return (
		<div className="form">
			<label className='label'><strong> Summary</strong></label>
			<textarea
				className="form-textarea form-input"
				type="text"
				onChange={handleSummary}
				value={summary}
				maxLength="75"
			/>
			<label className='label'><strong> Link</strong></label>
			<input
				className="form-input"
				type="text"
				onChange={handleLink}
				value={link}
			/>
			<label className='label'><strong> Languages</strong></label>
			<input
				className="form-input"
				type="text"
				onChange={handleLanguages}
				value={language}
			/>
			<br />
			<button
				className="form-submit-button"
				onClick={() =>
					handleEditForm()
				}
			>
				EDIT
			</button>
		</div>
	);
}

export default EditInputs;