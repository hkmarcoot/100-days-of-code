import React from "react";
import "./styles.css";

import Inputs from "../Inputs";

function AddAnItemForm({ onSubmit, showModal, setShowModal }) {
	if (showModal) {
		return (
			<div className="window-modal">
				<div className="window">
					<span className="close" onClick={() => setShowModal(false)}>
						&times;
					</span>
					<h2 className="window-title">CREATE A POST</h2>
					<Inputs onSubmit={onSubmit} setShowModal={setShowModal} />
				</div>
			</div>
		);
	}

	return null;
}

export default AddAnItemForm;
