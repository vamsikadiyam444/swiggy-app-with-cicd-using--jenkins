import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNfydBcY6mBLVm0goD73pk1aGfIweGaM4_w&s" alt="logo"/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About</li>
                    <li>User Login</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card">
        <h2>{resData.resName} </h2>
        <h3>{resData.rating}</h3>
        <h3>{resData.expectedDeliveryTime}</h3>
         <h3>{resData.cusinies}</h3>
        </div>
    )

}

const resObj = {
    resName:"Satkar Restaurant",
    rating: "4.4 stars",
    expectedDeliveryTime: "30-35 mins",
    cusinies : ['North Indian', 'South Indian', 'Indian Satkar Chowk']

}
const Body = () => {
    return (
        <div className="body">
            <h3 className="search">search</h3>
            <div className="res-container">
                <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2" alt="res-logo"/>
            <RestaurantCard resData = {resObj}/>
            
            </div>

        </div>
    )
}

const App = () => {
    return(
        <>
        <Header />
        <Body />

        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)