import { useState } from "react";

export default function CommentForm({addNewComment}) {
  const [formData, setfromData] = useState({
    username: "",
    comment: "",
    rating: "",
  });

  function handleChange(event) {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setfromData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  }

  function handleSubmitChange(event) {
    console.log(formData);
    addNewComment(formData)
    event.preventDefault();
    setfromData({
      username: "",
      comment: "",
      rating: "",
    });
  }
  return (
    <div>
      <h2>Give a Comment</h2>
      <form action="" onSubmit={handleSubmitChange}>
        <label htmlFor="username">User Name </label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
          name="username"
          id="username"
        />
        <br />
        <br />
        <label htmlFor="comment">Comment </label>
        <textarea
          value={formData.comment}
          onChange={handleChange}
          placeholder="Add some comment"
          name="comment"
          id="comment"
        ></textarea>
        <br /> <br />
        <label htmlFor="rating">Rating </label>
        <input
          type="number"
          value={formData.rating}
          onChange={handleChange}
          placeholder="rating"
          min={1}
          max={5}
          name="rating"
          id="rating"
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
