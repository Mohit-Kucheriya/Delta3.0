import { useState } from "react";

export default function Form() {
  const [formData, setformData] = useState({
    fullName: "",
    userName: "",
    password:""
  });

  function handleCommonChange(event) {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    // console.log(newValue);

    setformData((currData) => {
      // by using [] we send the computed property value
      currData[fieldName] = newValue;
      // As by only assigning the changed value to the key object cannot get re-render, for that we should pass the whole object
      return { ...currData };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setformData({
      fullName: "",
      userName: "",
      password:""
    });
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name </label>
      <input
        type="text"
        placeholder="Enter fullname"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleCommonChange}
      />

      <br />
      <br />

      <label htmlFor="userName">User Name </label>
      <input
        type="text"
        placeholder="Enter userName"
        value={formData.userName}
        id="userName"
        name="userName"
        onChange={handleCommonChange}
      />
      <br />
      <br />

      <label htmlFor="password">Password </label>
      <input
        type="password"
        placeholder="Enter password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleCommonChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
