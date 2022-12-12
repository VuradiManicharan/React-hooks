



const Portfolio = (props) =>{
    
    console.log(props)

    return(
        <div>
            <h1>My Name is {props.name}</h1>
            <p>I am {props.designation}r</p>
            {props.children}
        </div>
    )
}



export default Portfolio;