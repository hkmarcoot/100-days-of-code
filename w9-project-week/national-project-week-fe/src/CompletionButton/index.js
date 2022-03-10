import React, { useState } from "react";
import "./styles.css";

function CompletionButton({ isComplete }) {
	const [complete, setComplete] = useState(false);
	function completeHandle() {
		setComplete(!complete);
	}

	return (
		<div>
			<span
				className="material-icons-outlined material-icons completion-button"
				onChange={completeHandle}
			>
				{isComplete ? "check_circle" : "radio_button_unchecked"}
			</span>
		</div>
	);
}

export default CompletionButton;
