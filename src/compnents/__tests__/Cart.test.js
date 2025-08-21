import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA_NEW from "../mock/mockItemList.json";
import "@testing-library/jest-dom"
import { fireEvent, render , screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA_NEW)
        }
    })
})

test("should render itemList", async() => {
    await act(async() => {
        render(
            <BrowserRouter>
            <Provider store={appStore}> 
                <Header />
              <RestaurantMenu />
              <Cart />
            </Provider>
            </BrowserRouter>

          
        )
    })

    const menuBtn = screen.getByText("Recommended (20)")
    
    fireEvent.click(menuBtn);

    expect(screen.getAllByTestId("foodItems").length).toBe(20)

    expect (screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    const addBtn = screen.getAllByRole("button" , {name: "Add"})
    fireEvent.click(addBtn[0]);

    expect (screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    
    expect(screen.getAllByTestId("foodItems").length).toBe(21)

    fireEvent.click(addBtn[1]);

    
    expect (screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(22)

    const clearCartBtn = screen.getByRole("button" , {name: "Clear Cart"})
    fireEvent.click(clearCartBtn);

    expect(screen.getByText("Cart is Empty . Add Items to the Cart!")).toBeInTheDocument(); 





})