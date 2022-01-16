import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  return <main id="main">
  
    {posts.map(function(item) { return <Post key = {item.postId} 
                                            title = {item.title}
                                            date = {item.date}
                                            author = {item.author}
                                            text = {item.text}
                                            highlights = {item.highlights}
                                            image = {item.image}
                                            />})}
  </main>;

}

export default Main;
