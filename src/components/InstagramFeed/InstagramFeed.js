import React, { useState, useEffect } from 'react';

function InstagramFeed(props) {
    const { accessToken } = props;
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=48`
      )
        .then((response) => response.json())
        .then((data) => {
          setPosts(data.data);
        })
        .catch((error) => console.error(error));
    }, []);
  
    return (
      <div className="instagram-feed-container">
        {posts.map((post) => (
          <div key={post.id} className="instagram-feed-item">
            {post.media_type === "VIDEO" ? (
              <video src={post.media_url} poster={post.thumbnail_url} controls />
            ) : (
              <img src={post.media_url} alt={post.caption} />
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default InstagramFeed;
  
  
