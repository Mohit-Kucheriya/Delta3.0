import { useState } from "react";
import "./Comment.css";
import CommentForm from "./CommentForm";

export default function Comment() {
  const [comment, setComment] = useState([
    {
      username: "@mk",
      comment: "Great Job",
      rating: "2",
    },
  ]);

  let addNewComment = (comment) => {
    setComment((currComment) => {
      return [...currComment, comment];
    });
  };

  return (
    <div className="commentBox">
      <h2>All Reviews</h2>
      {comment.map((comment, idx) => (
        <div className="comment" key={idx}>
          <h3>User Name: {comment.username}</h3>
          <h4>Comment: {comment.comment}</h4>
          <h4>Rating: {comment.rating}</h4>
        </div>
      ))}

      <hr />
      <CommentForm addNewComment={addNewComment} />
    </div>
  );
}
