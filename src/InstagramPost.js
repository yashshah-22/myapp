import React, { useState } from 'react';
import './InstagramPost.css';
function InstagramPost() {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    }
  };

  const handleCommentClick = () => {
    setCommentCount(commentCount + 1);
  };

  return (
    <div className="post">
      <img src="https://via.placeholder.com/150" alt="Post" />
      <div className="buttons">
        <button onClick={handleLikeClick} className={isLiked ? 'liked' : ''}>
          <i className="fa fa-heart"></i>
        </button>
        <button onClick={handleCommentClick}>
          <i className="fa fa-comment"></i>
        </button>
      </div>
      <div className="counts">
        <p>{likeCount} likes</p>
        <p>{commentCount} comments</p>
      </div>
    </div>
  );
}

export default InstagramPost;
