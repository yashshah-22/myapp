import React, { useState } from "react";
import "./Post.css";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [comments, setComments] = useState(post.comments);

  const handleLikeClick = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      username: "User123",
      text: e.target.elements.comment.value,
    };
    setComments([...comments, newComment]);
    e.target.reset();
  };

  return (
    <div className="post">
      {post.type === "image" && (
        <img className="post-image" src={post.contentUrl} alt="" />
      )}
      {post.type === "video" && (
        <video className="post-video" src={post.contentUrl} controls />
      )}
      <div className="post-buttons">
        <button
          className={liked ? "liked" : ""}
          onClick={handleLikeClick}
        >
          <i className="fas fa-heart" /> {likesCount}
        </button>
        <button>
          <i className="fas fa-comment" /> {comments.length}
        </button>
      </div>
      <ul className="post-comments">
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.username}</strong> {comment.text}
          </li>
        ))}
      </ul>
      <form className="post-comment-form" onSubmit={handleCommentSubmit}>
        <input type="text" name="comment" placeholder="Add a comment" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post;
