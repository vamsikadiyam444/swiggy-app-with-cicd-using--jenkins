import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";


// class About extends Component {
//     constructor(props){
//         super(props);
//         //console.log("Parent constructor")
//     }

    
//     componentDidMount(){
        
//         //console.log("Parent component Did Mount");
//     }

//     // componentDidUpdate(){
//     //     console.log("Parent Updated")
//     // }
//     render (){
//         //console.log("Parent Render")
//         return(
//         <div>
//             <h1>Chandu's Restaurant </h1>
//             <p>One of the Finest Restaurant</p>

//             <User name="Chandu (Func)"/>
//             {/* <UserClass  name="Chakri (Class)"/> */}
//         </div>
//     )
//     }

// }
// export default About;
const About = () => {

    const onlineStatus = useOnlineStatus();

      if(onlineStatus === false){
    return <h1>Looks like you're offline! Check Internet Connectivity</h1>
   }
    return(
        <div className="text-center p-2 m-2 text-2xl font-bold">
            <h1>This Swiggy App created By Chakradara Rao Seelam. </h1>

            {/* <User name="Chandu (Func)"/>
            <UserClass  name="Chakri (Class)"/> */}
        </div>
    )
}
export default About;


/*

Parent constructor
Parent Render
   - Child Constructor
   - Child Render

   - Child Component Did Mount

- Parent Component Did Mount

*/