import React, {useState, UseEffect, useEffect} from "react";



const LearnUseEffect1 = () =>{
    const [count, setCount] = useState(0)
    const [gold, setGold] = useState(0)

    

    useEffect(
    ()=>{
        document.title = `Learning React Hooks`;
        console.log("Title got updated");
        }, [count]
    )



    return(
        <div>
            <p>You clicked {count} times</p>
            <p>Value of Gold {gold} times</p>
            <button onClick={()=> setCount(count + 1)}>
                Update count
                </button>

            <button onClick={()=> setGold(gold + 1)}>
                Update gold
                </button>
        </div>
    )
}


export default LearnUseEffect1;