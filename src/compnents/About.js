import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component {
    constructor(props){
        super(props);
        //console.log("Parent constructor")
    }
    componentDidMount(){
        
        //console.log("Parent component Did Mount");
    }

    // componentDidUpdate(){
    //     console.log("Parent Updated")
    // }
    render (){
        //console.log("Parent Render")
        return(
        <div>
            <h1>Chandu's Restaurant </h1>
            <p>One of the Finest Restaurant</p>

            <User name="Chandu (Func)"/>
            {/* <UserClass  name="Chakri (Class)"/> */}
        </div>
    )
    }

}
export default About;
// const About = () => {
//     return(
//         <div>
//             <h1>Chandu's Restaurant </h1>
//             <p>One of the Finest Restaurant</p>

//             <User name="Chandu (Func)"/>
//             <UserClass  name="Chakri (Class)"/>
//         </div>
//     )
// }
// export default About;


/*

Parent constructor
Parent Render
   - Child Constructor
   - Child Render

   - Child Component Did Mount

- Parent Component Did Mount

*/