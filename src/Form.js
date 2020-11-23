import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    //prevent default form post
    event.preventDefault();

    const user = {
      //name: name (key/value same so can abbreviate)
      name,
      age: 42,
      address: {
        street: "22 Field Lane",
        city: "London"
      }
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>My form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
