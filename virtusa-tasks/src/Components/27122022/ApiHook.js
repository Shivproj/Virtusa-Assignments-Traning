import { useState, useEffect } from "react";

const useApiHook = (x) => {
    const [data,setData] = useState();
    useEffect(() =>{
        fetch(x).then(data => data.json()).then(a=>setData(a))

    },[])
  return data;
};

export default useApiHook;
