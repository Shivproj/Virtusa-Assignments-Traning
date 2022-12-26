import React from "react";

function FormExample() {
  const [formState, setFormState] = React.useState({
    name: "",
    age: "",
    gender: "",
  });

  function handleChange(event) {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      `Name: ${formState.name} Age: ${formState.age} Gender: ${formState.gender}`
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={formState.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <input
          type="text"
          name="gender"
          value={formState.gender}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default FormExample;
