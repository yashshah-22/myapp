import React, { useState } from 'react';

function NewPost() {
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  
  const [file, setFile] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { content, file };
    addPost(post);
    setContent('');
    setFile(null);
  };
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };


  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleMediaChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = e.target.elements.comment.value;
    setComments((prevComments) => [...prevComments, newComment]);
    e.target.reset();
  };

  return (
    <div className="post">
      <div className="post-content">
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={handleContentChange}
        />
        <div className="post-media">
          <input type="file" onChange={handleMediaChange} />
          {media && <img src={URL.createObjectURL(media)} alt="media" />}
        </div>
      </div>
      <div className="post-actions">
        <button onClick={handleLikeClick}>{likes} Likes</button>
        <button>{comments.length} Comments</button>
      </div>
      {comments.length > 0 && (
        <div className="post-comments">
          {comments.map((comment, index) => (
            <div key={index}>{comment}</div>
          ))}
        </div>
      )}
      <form onSubmit={handleCommentSubmit}>
        <input type="text" name="comment" placeholder="Add a comment" />
        <button type="submit" onClick={handleSubmit} >Post</button>
      </form>
    </div>
  );
}

export default NewPost;
