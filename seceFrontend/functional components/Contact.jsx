import { useState } from "react";
const Contact=()=>{
    var a= useState(10);
    var [num,setNum]=useState(0);
    function handle(){
        setNum(num+1)
    }
    return (<div>
        <h2>Welcome to the Contact page</h2>
        <h3>This is a state example</h3>
        <h4>{a}</h4>
        <h4>{num}</h4>
        <button>+</button>
        <button onClick={()=>setNum(num+2)}>+</button>
        <button onClick={()=>handle()}>/</button>
    </div>)
};
export default Contact;