import ChatEventPage from "./chatEventPage";
import{screen,render} from "@testing-library/react";
// import {BrowserRouter} from "react-router-dom"



it('check if the chatEvent page section working and render',()=>{
    render(<ChatEventPage/>)

    const chatEventSection = screen.getByTestId("chatboxeventtesting")

     expect(chatEventSection).toBeInTheDocument();

    //testing for class
    expect(chatEventSection).toHaveClass('chatEventPage')
})