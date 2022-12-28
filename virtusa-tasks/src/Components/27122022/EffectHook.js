import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const EffectHook = () => {
  const darkTheme = useContext(ThemeContext);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);


  return () => clearInterval(interval);
  }, []);

  return (
    <div>
      

      <h1>Example 2 for useEffect</h1>
      {darkTheme ? <h1>Dark Theme</h1> : <h1>Light Theme</h1>}
      <p>The count is: {count}</p>
    </div>
  );
};
export default EffectHook;
