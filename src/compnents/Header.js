import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";


const Header = () => {
    const [ btnName, setBtnName ]= useState("login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log({loggedInUser});


    return (
        <div className="flex justify-between items-center m-4 border border-solid to-black bg-pink-100">
            <img className="w-30" src={LOGO_URL} alt="logo"/>
            <div className="nav-items">
                <ul className="flex  p-2 px-4   gap-4">
                    <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li> <Link to="/about" >About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="border border-solid to-black px-2 bg-gray-200" 
                    onClick={() => {
                        // if (btnName == "login"){
                        //     setBtnName("logout");
                        // }else {
                        //     setBtnName("login")
                        // }
                        btnName == "login" ? setBtnName("logout") : setBtnName("login");
                       

                    }}>{btnName}</button>
                    <li className="font-bold">{loggedInUser}</li>


                </ul>
            </div>
        </div>
    )
}

export default Header;