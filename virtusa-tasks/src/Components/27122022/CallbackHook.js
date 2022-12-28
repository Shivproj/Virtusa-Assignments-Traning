import React from 'react'
import {useEffect,useState} from 'react'
const CallbackHook=({getItems})=> {
    const [items,setItems] = useState([]);
    useEffect(()=>setItems(getItems()),[getItems]);
  return  items.map(item=><div>{item}</div>)
  
}

export default CallbackHook