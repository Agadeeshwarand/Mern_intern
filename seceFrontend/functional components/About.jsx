import { useState } from "react";
// eslint-disable-next-line no-unused-vars
const About=()=>{
    var[text,setText]=useState("hello")
    // eslint-disable-next-line no-unused-vars
    function handleText(){
        setText()
    }
    return(
        <div>
            <h2>This is About Component.</h2>
            <h2>TextArea</h2>
            <textarea value={text}/>
            <textarea value={text} onChange={()=>setText()}/>
            <textarea value={text} onChange={(event)=>setText(event.target.value)}/>
            <p>text is {text}</p>
        </div>
    )
}
