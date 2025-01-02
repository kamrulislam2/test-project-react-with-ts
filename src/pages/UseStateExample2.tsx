import React, { useState } from "react";

const UseStateExample2 = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log({ name, email });
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    const inputName = e.target.name;
    const inputValue = e.target.value;
    console.log(inputName, inputValue);
    setUser({ ...user, [inputName]: inputValue });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
        className="border"
      />

      <input
        onChange={handleChange}
        type="text"
        name="email"
        id="email"
        className="border"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseStateExample2;
