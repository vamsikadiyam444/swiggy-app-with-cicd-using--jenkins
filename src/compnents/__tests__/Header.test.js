import { fireEvent, render , screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


test("should render Header component with a login button",()=> {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
);

    const loginButton = screen.getByRole("button", {name : "login"}); // fining by role is good way. If you can't find by role use text
   
    // const LoginButton = screen.getByText("login")
    expect(loginButton).toBeInTheDocument();
});

test("should render Header component with a cart items 0 ",()=> {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
);

    const cartItems = screen.getByText("Cart - (0 items)"); 
   
    expect(cartItems).toBeInTheDocument();
});

test("should render Header component with a cart items 0 ",()=> {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
);

    const cartItems = screen.getByText(/Cart/);  // we can write rejex (//) and in regex, you don't need to write an exact string . if you will just write cart , it will match cart
   
    expect(cartItems).toBeInTheDocument();
});

test("should change login to logout button on click",()=> {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
);

    const loginButton = screen.getByRole("button", {name : "login"}); // fining by role is good way. If you can't find by role use text
   
    fireEvent.click(loginButton);

    const logOutButton = screen.getByRole("button", {name : "logout"});
    
    expect(logOutButton).toBeInTheDocument();
});