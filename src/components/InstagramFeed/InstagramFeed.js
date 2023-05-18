//@TODO implement multipost and carousel media
//@TODO fetch more than 48 posts

import React, { useState, useEffect } from 'react';

function InstagramFeed(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const data = await fetchInstagramPosts(props.accessToken);
        setPosts(data);
      } catch (error) {
        console.log("Error fetching Instagram data:", error);
      }
    };
    fetchInstagramData();
  }, []);

  const fetchInstagramPosts = async (accessToken, limit = 48) => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=${limit}`;
    const response = await fetch(url);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    } else {
      throw new Error('Network response was not ok');
    }
  };

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
