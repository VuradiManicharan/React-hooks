import React, {useState} from "react";

const LearnUseState3 = () =>{
    let [coins, setCoins] = useState(0)

    function increment(){
        setCoins(coins + 1)
    }

    return(
        <div>
            <h1>{coins}</h1>
            <button onClick={increment}>+</button>

            <button onClick={()=> (coins>=2?setCoins(coins-1): "")}>-</button>

            <button onClick={()=> {setCoins(0)}}>Reset</button>
        </div>
    )
}


export default LearnUseState3;
