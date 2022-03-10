import React from "react";
import CompletionButton from "../CompletionButton";
import "./styles.css";


function Post({ id, isComplete, week, link, tags, summary, handleDelete, handleEditMode }) {
	
	return (
		<div className="post post-grid">
			<div className="post-header">
				<CompletionButton isComplete={isComplete} />
				<p className="post-week">
					<span
						className="material-icons-outlined material-icons delete-button"
						onClick={() => handleDelete(id, week)}
					>
						clear
					</span>
				</p>
			</div>

			<p className="post-description">
				<p>
					<span className="material-icons-outlined material-icons">link</span>
				</p>
				<div className="word-wrap">
					<a
						className="post-description-link"
						href={link}
						rel="noopener noreferrer"
						target="_blank"
					>
						{summary}
					</a>
				</div>
			</p>

			<p className="post-tags">
				{ tags ? <span className="tags-span">{tags}</span> : <span class="material-icons-outlined material-icons tag" onClick={() => handleEditMode(id)}> sell</span>}
				<p className='edit'>
					<span className='material-icons-outlined material-icons edit-btn' onClick={() => handleEditMode(id)}>edit</span>
				</p>
			</p>
		</div>
	);
}


export default Post;
