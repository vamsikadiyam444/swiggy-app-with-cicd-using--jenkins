import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
            name: "dummy",
            location: "default"
            }
        }
       // console.log("Child Constructor")

    }
     componentDidMount(){
        //  this.timer = setInterval(()=> {
        //     console.log("Settimeout Render")
        // },1000);
        // const data = await fetch ("https://api.github.com/users/Chakri45446");
        // const json = await data.json();
        // console.log(json);

        // this.setState({
        //     userInfo: json

        // })
        
        //console.log("Child Component Did Mount")
    }

    componentDidUpdate(){
       
        //console.log("Child Upadte");

    }

    componentWillUnmount(){
    //     clearInterval(this.timer);
    //    console.log("Component Will Unmount")
    }

    render(){
       // console.log("Child Render")
        const{name,location} = this.state.userInfo
        return(
            <div>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}

export default UserClass;