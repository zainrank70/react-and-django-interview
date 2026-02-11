import React,{useState,useEffect} from "react";

function Counter(){
    const [count,Setcount]=useState(0);

    useEffect(()=>{
        console.log("Count changes :",count)
    },[count]) //runs every time `count` changes like fetching api data latest when component changes

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