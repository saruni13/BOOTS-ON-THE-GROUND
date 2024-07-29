import React, { useState, useEffect } from 'react';
import { UserCircle } from '@phosphor-icons/react';

const Feedback = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [likedComments, setLikedComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch('http://localhost:3000/comments');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: 123, userName: userName, content: newComment }),
      });
      if (response.ok) {
        setNewComment('');
        setUserName('');
        fetchComments();
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleLike = (id) => {
    if (!likedComments.includes(id)) {
      setLikedComments([...likedComments, id]);
    } else {
      setLikedComments(likedComments.filter((commentId) => commentId !== id));
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="container-feedback">
      <h2 className="heading">We would Love to hear from you : Speak to us</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Your Name:</label>
          <input
            className="input"
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Your Comment:</label>
          <textarea
            className="textarea"
            id="comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        </div>
        <button className="button" type="submit">Submit</button>
      </form>
      <div className="comments">
        <h3 className="comments-heading">Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <div className="comment-info">
              <div className='profile'>
              <UserCircle size={32}/>
              <span className="comment-name">{comment.userName}</span>
              </div>
              <button
                className="like-button"
                onClick={() => handleLike(comment.id)}
              >
                {likedComments.includes(comment.id) ? 'Unlike' : 'Like'}
              </button>
              {likedComments.includes(comment.id) && '❤️'}
            </div>
            <p className="comment-content">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
