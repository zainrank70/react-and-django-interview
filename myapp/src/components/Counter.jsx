import React,{useState} from "react";

function Counter(){
    const [count,Setcount]=useState(0);

    return (
        <>
        <h1>Counter Component Pratice</h1>
        <p>Counter Value is : {count}</p>
        <button onClick={()=>{
            Setcount(count=>count+1)
        }}>Incrementer</button>
        </>
    )
}

export default Counter;