// import React from "react"; 

let a = 5
console.log("outside a component", a)

const LearnUseState1 = () => {

    let x = 50

    let b = 10
    console.log("b inside component", b)

    function change(){
        x = x+1
        console.log("inside change", x)
    }


    return(
        <div>
            <h1>{x}</h1>
            <button onClick={change}>change x</button>
        </div>
    )

}

export default LearnUseState1;