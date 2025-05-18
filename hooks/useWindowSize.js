import { useEffect, useState } from "react";


const useWindowSize = () =>{
    const [windowsize,setWindowsize] = useState({width: window.innerWidth,height: window.innerHeight})
    useEffect(()=>{
        window.addEventListener('resize',()=>{
        setWindowsize({width: window.innerWidth,height: window.innerHeight});
        })
    },[])
    return windowsize
}

export default useWindowSize