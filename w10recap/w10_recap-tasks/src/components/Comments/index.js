import React from "react";
import css from "./Comments.module.css";

function Comments({ comments }) {
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <div className={css.comment} key={index}>
            <h4>{comment.name} says:</h4>
            <p>{comment.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default Comments;
