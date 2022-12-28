import { useState } from 'react';

const StateHook = ()=> {
  
  const [name,setName] = useState('');
  const handleChange= (e)=>{
    setName(e.target.value);
  }

  return(
    <>
    <h1>Example 1 for useState</h1>
    <input type="text" onChange={(e)=>handleChange(e)}/>
    {name}
    </>
  )
}
export default StateHook;