import React,{useState,useEffect,useRef} from 'react'


const RefHook=()=> {
    
    const [name,setName] = useState('');
    const prevName = useRef('');
    //useEffect gets called after the render which is why this is possible. - note
    useEffect(() => {
        prevName.current = name;
   
    },[name])
    
  return (
    <>
    <input type="text" onChange={(e)=>setName(e.target.value)}/>
    <div>My name is {name}</div>
    <div>My previous name is {prevName.current}</div>

    </>
  )
}

export default RefHook