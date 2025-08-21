import { render , screen } from "@testing-library/react"
import RestaurantCard from "../ResturantCard"
import MOCK_DATA from "../mock/mockData.json"
import "@testing-library/jest-dom"



test("should render RestaurantCard with props Data" , ()=> {
    render(<RestaurantCard resData={MOCK_DATA}/>);
    
    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
})