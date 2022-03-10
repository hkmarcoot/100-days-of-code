
import * as React from "react";
import styles from "../styles/RandomZooState.module.css"

export default function randomZooState() {
  const [posts, setPosts] = React.useState([]);

  const handleFetchPosts = async () => {
    const postsResponse = await fetch(
      "https://zoo-animal-api.herokuapp.com/animals/rand"
    );
    const postsData = await postsResponse.json();
    setPosts(postsData);
    console.log(posts);
  };

  return (
    
    
    <div className={styles.container}>
    
      <button>
        <a href="http://localhost:3000/">[Go back to main page]</a>
      </button>
      <button onClick={handleFetchPosts}>Fetch Zoo Animal</button>
      <div>
      <p>Name: {posts.name}</p>
      <p>Habitat: {posts.habitat}</p>
      <p>Diet: {posts.diet}</p>
      <p>Geo_range: {posts.geo_range}</p>
      <img src={posts.image_link} width="300px"></img>
      </div>
      {/* <p>{JSON.stringify({ data })}</p> */}
      {/* <p>{JSON.stringify(posts)}</p> */}
    </div>
    
  );
}
