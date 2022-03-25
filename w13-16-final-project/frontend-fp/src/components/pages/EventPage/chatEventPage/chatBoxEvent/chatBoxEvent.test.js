import ChatBoxEvent from "./chatBoxEvent";
import{screen,render} from "@testing-library/react";
// import {BrowserRouter} from "react-router-dom"



it('check if the chatEvent box page section working and render',()=>{
    render(<ChatBoxEvent/>)

    const chatboxContainer = screen.getByTestId("chatboxeventcontainertesting")

     expect(chatboxContainer).toBeInTheDocument();

    //testing for class
    expect(chatboxContainer).toHaveClass('chatBoxEvent')
})