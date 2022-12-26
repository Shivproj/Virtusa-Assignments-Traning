import React from "react";

const  FormExample = ()=> {
  const [formState, setFormState] = React.useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
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
        Male:
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        />
      </label>
      <label>
        Female:
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default FormExample;
