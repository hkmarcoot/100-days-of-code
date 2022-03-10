import React from "react";
import "./styles.css";

import EditInputs from "../EditInputs";

function AddAnEditForm({ editPost, onEditSubmit, showEditModal, setShowEditModal }) {
	if (showEditModal) {
		return (
			<div className="window-modal">
				<div className="window">
					<span className="close" onClick={() => setShowEditModal(false)}>
						&times;
					</span>
					<h2 className="window-title">EDIT THE POST</h2>
					<EditInputs editPost={editPost} onEditSubmit={onEditSubmit} setShowEditModal={setShowEditModal} />
				</div>
			</div>
		);
	}

	return null;
}

export default AddAnEditForm;