import { useEffect } from "react";

const User = ({name}) => {
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("enterd")
        },1000);
        return ()=>{
            clearInterval(timer)
            console.log("will unmount")
        };  
    })
    return(
        <div className="user-item">
            <h1>Name: {name} </h1>
            <h2>Location: Mylavaram</h2>
        </div>
    )
}
 export default User;