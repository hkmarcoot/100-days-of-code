import HeroEventUser from "./heroeventuser";
import{screen,render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom"



it('check if the HeroEventUserMock section working and render',()=>{
    render(<BrowserRouter><HeroEventUser DataToRender={[]}/></BrowserRouter>)

    const HeroEventSection = screen.getByTestId("heroContainerTesting")

     expect(HeroEventSection).toBeInTheDocument();

    //testing for class
    expect(HeroEventSection).toHaveClass('heroContainer')
})