import "./App.css";
import React from 'react';
import StateHook from "./Components/27122022/StateHook";
import EffectHook from "./Components/27122022/EffectHook";
import ContextHook from "./Components/27122022/ContextHook";
import CallbackHook from "./Components/27122022/CallbackHook";
import RefHook from "./Components/27122022/RefHook";
import {useState} from 'react';


export const ThemeContext  = React.createContext()


const App=()=> {
  const[number,setNumber] = useState(1);
  const [darkTheme,setDarkTheme] = useState(true);
  const getItems =()=>{
    return[number,number+1,number+2];
  }
  const toggleTheme=()=>{    
    setDarkTheme(prevDarkTheme=>!prevDarkTheme);
  }


  return (
    <div class="App">
    <ThemeContext.Provider value={darkTheme} >
      <button onClick={()=>toggleTheme()}>ToggleTheme</button>
    <StateHook/>
    <EffectHook/>
    <ContextHook/>
    <input type="number" onChange={(e)=>setNumber(parseInt(e.target.value))}/>
    <CallbackHook getItems={getItems}/>
    <RefHook/>
    </ThemeContext.Provider>
    </div>
    
    
    
  );
}

export default App;
