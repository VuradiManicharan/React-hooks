import React, {useState} from "react";


let x = 30
console.log(x)

const LearnUseState2 = () =>{
    let [a, setA] = useState(0)

    console.log("Mani")



return(
    <div>
        <h1>{a}</h1>
        <button onClick={()=>{setA(a+1)}}>change x</button>
    </div>
)

}


export default LearnUseState2;
