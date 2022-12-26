import "./App.css";
import EXAMPLE1 from "./Components/23122022/ex1";
import Student from "./Components/23122022/ex2";
import FormExample from "./Components/23122022/ex3";
import { useState } from "react";

function App() {
  const [gender, setGender] = useState();
  const [name, setName] = useState();
  const getColor = (color) => {
    document.body.style.background = color;
  };

  return (
    <div className="App">
      <label>Male</label>
      <input type="radio" name="gender" onChange={(e) => setGender("Male")} />
      <label>Female</label>
      <input type="radio" name="gender" onChange={(e) => setGender("Female")} />
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <EXAMPLE1
        name={name}
        gender={gender}
        color={(color) => getColor(color)}
      />
      <Student />
      <FormExample />
    </div>
  );
}

export default App;
