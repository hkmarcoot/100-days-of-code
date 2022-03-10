import css from "./Post.module.css";
import H2header from "../h2header/index.js";
import Article from "../Article/index.js";
import Comments from "../Comments/index.js";

function Post({ articles, index }) {
  return (
    <>
      <H2header title={articles[index].title} />

      <Article article={articles[index]} />

      <button className={css.likeBbutton}>Like 👍</button>

      <section className={css.commentSection}>
        <Comments comments={articles[index].comments} />
      </section>
    </>
  );
}

export default Post;
