import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import BlogPost from '../BlogPost';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  return <main id="main">
  
    {posts.map(function(item) { return <BlogPost key = {item.id} 
                                            title = {item.title}
                                            date = {item.datePosted}
                                            author = {item.author}
                                            text = {item.text}
                                            image = {item.image}
                                            alt = {item.alt}
                                            />})}
  </main>;

}

export default Main;