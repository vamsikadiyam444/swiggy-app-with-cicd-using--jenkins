import { render , screen } from "@testing-library/react";
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

describe("ContactUs page Test Cases" , ()=> { // describe  used for grouping of mutiple cases so that we can find easily

  // Note : =>   we can use test or it (like test alias it or test another name it). 
  // we can see in lot of git repositores so panic both are same and work as same

it("should load Contact Us Component " , ()=> {

    render(<ContactUs />)

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

});

test("should load button inside  Contact Us Component " , ()=> {

    render(<ContactUs />)

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();

});

test("should load input name inside  Contact Us Component " , ()=> {

    render(<ContactUs />);

     // Querying 
    const button = screen.getByPlaceholderText("name");

    //Assertion
    expect(button).toBeInTheDocument();

});

// If i want test multiple input then i need to use getAllByText 

test("should load 2 input boxes in contact us component" , ()=>{
    render(<ContactUs />);

    const InputBoxes = screen.getAllByRole("textbox");

    // console.log(InputBoxes)

    expect(InputBoxes.length).toBe(2);
});

test("should load submit button in contact us component" , ()=>{
    render(<ContactUs />)

    const submit = screen.getByRole("button");

    expect(submit).toBeInTheDocument();
})

})
