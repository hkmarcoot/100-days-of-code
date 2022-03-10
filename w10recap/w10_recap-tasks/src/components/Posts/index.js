import css from "./Posts.module.css";
import React from "react";
import Post from "../Post/index.js";
import { useAuth0 } from "@auth0/auth0-react";

function Posts({ articles }) {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        {Object.keys(articles).map((index) => (
          <article className={css.post} key={index}>
            <Post articles={articles} index={index} key={index} />
          </article>
        ))}
        ;
      </>
    )
  );
}

export default Posts;
