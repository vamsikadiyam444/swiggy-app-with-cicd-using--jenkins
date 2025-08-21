import { fireEvent, render , screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mock/mockResListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"



global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        },
    });
});

test("should search Res List for pizza text input ", async () => {
    await act( async () => 
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    
));
const cardsBeforeSearch = screen.getAllByTestId("resCard")

expect(cardsBeforeSearch.length).toBe(8)

const searchBtn = screen.getByRole("button", {name: "Search"});

const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput , {target : {value : "pizza"}});

fireEvent.click(searchBtn);

// screen should load with 2 pizza res cards

const cardsAfterSearch =  screen.getAllByTestId("resCard")

expect(cardsAfterSearch.length).toBe(2);
});


test("should filter top rated restaurant" , async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        ));
        const cardsBeforeFilter = screen.getAllByTestId("resCard")

        expect(cardsBeforeFilter.length).toBe(8);

        const filterBtn = screen.getByRole("button" , {name:"Top Rated Restaurants"});

        fireEvent.click(filterBtn);

        const cardsAfterFilter = screen.getAllByTestId("resCard");
        expect(cardsAfterFilter.length).toBe(6)
    
})