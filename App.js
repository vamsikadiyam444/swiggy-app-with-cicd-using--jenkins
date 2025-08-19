import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/compnents/Header";
import Body from "./src/compnents/Body";
import { createBrowserRouter , RouterProvider , Outlet, Form} from "react-router-dom";
import About from "./src/compnents/About";
import ContactUs from "./src/compnents/ContactUs";
import Error from "./src/compnents/Error";
import RestaurantMenu from "./src/compnents/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./src/compnents/Cart";


const App = () => {
    const [userName , setUserName] = useState("")

    useEffect(()=>{
        // make an api call and get the userinfo
        const data = {
            name:'Chakri seelam',
        }
        setUserName(data.name)
    },[])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
        <>
        <Header />
        <Outlet />

        </>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        
        element:<App />,
        children : [
            {
        path: "/",
        element:<Body />,
    },
              
    {
        path: "/about",
        element:<About />,
    },
    {
        path: "/contact",
        element:<ContactUs />,
    },
    {
        path: "/resmenu/:resId",
        element:<RestaurantMenu />,
    },{

        path:"/cart",
        element:<Cart />

    },

        ],
        errorElement:<Error />
}])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RouterProvider router= {appRouter}/>);