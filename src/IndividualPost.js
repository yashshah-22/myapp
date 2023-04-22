import React, { useState } from 'react';
import './IndividualPost.css';

function IndividualPost(props) {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="post">
      <div className="post-image">
        <img src={props.image} alt={props.caption} />
      </div>
      <div className="post-details">
        <div className="post-header">
          <h2>{props.username}</h2>
          <span>{props.date}</span>
        </div>
        <div className="post-body">
          <p>{props.caption}</p>
        </div>
        <div className="post-actions">
          <button
            className={`post-like-button ${liked ? 'liked' : ''}`}
            onClick={handleLike}
          >
            {liked ? 'Unlike' : 'Like'}
          </button>
          <button
            className="post-comment-button"
            onClick={handleShowComments}
          >
            {showComments ? 'Hide comments' : 'Show comments'}
          </button>
        </div>
        {showComments && (
          <div className="post-comments">
            {comments.length === 0 ? (
              <p>No comments yet</p>
            ) : (
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            )}
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={handleCommentChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndividualPost;
