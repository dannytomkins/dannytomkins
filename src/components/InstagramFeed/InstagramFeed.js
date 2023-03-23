import React, { useState, useEffect } from 'react';

function InstagramFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${YOUR_ACCESS_TOKEN}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <img src={post.media_url} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default InstagramFeed;
