import React,{ useRef } from "react";

export default function Uncontrolcompoenent(){
    const inputref=useRef();

    const handleref=()=>{
        alert(`Hello ${inputref.current.value}`);
    }

    return (
        <>
        {/* Input manages its own internal value React only reads it when we need (via ref) */}
        <input type="text" ref={inputref}/> 
        <button onClick={handleref}>Submit</button>
        </>
    );
}