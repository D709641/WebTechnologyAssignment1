import React, { useState } from 'react';

// Comments page component
const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleAddComment = (e) => {
    e.preventDefault();

    if (commentText.trim() === '') {
      return;
    }

    const newComment = {
      text: commentText,
      photo: selectedFile,
      user: 'current_user', // replace with actual user identification
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setCommentText('');
    setSelectedFile(null);
  };

  return (
    <div>
      <h2>Comments</h2>
      <form onSubmit={handleAddComment}>
        <textarea
          value={commentText}
          onChange={handleCommentTextChange}
          placeholder="Enter your comment"
        />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Add Comment</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.user}</p>
            <p>{comment.text}</p>
            {comment.photo && <img src={URL.createObjectURL(comment.photo)} alt="Comment" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsPage;
