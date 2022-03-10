import React from "react";
// import css from "./Article.module.css";

function Article({ article }) {
  return (
    <>
      {article.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
}

export default Article;
